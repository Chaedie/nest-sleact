import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getUser(): string {
    // const user = await User.findOne();
    // return user;
    return '';
  }

  postUser(): string {
    // const user = await User.create();
    // return user;
    return '';
  }
}
