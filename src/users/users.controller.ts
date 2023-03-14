import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { User } from 'src/common/decorators/user.decorator';
import { JoinRequestDto } from './dto/join.request.dto';
import { UserDto } from '../common/dto/user.dto';
import { UsersService } from './users.service';
import { UndefinedToNullInterceptor } from 'src/common/Interceptors/undefinedToNull.interceptor';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { LoggedInGuard } from 'src/auth/logged-in.guard';

@Controller('api/users')
@ApiTags('Users')
@UseInterceptors(UndefinedToNullInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({ type: UserDto })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers(@User() user) {
    return user || false;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  async join(@Body() data: JoinRequestDto) {
    await this.usersService.join(data.email, data.nickname, data.password);
    return 'ok';
  }

  @ApiResponse({ status: 200, description: '성공', type: UserDto })
  @ApiResponse({ status: 500, description: '서버 에러' })
  @ApiOperation({ summary: '로그인' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  @UseGuards(LoggedInGuard)
  logout(@Req() req: Request, @Res() res: Response) {
    // req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
