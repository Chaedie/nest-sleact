import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from './join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    description: '아이디',
    required: true,
    example: 1,
  })
  id: number;
}
