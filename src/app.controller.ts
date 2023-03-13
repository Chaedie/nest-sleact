import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello nest.js';
  }

  @Get('user')
  getUser(): string {
    return this.appService.getUser();
  }

  @Post('user')
  postUser(): string {
    return this.appService.postUser();
  }
}
