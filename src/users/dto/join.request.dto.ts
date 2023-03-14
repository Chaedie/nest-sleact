import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'asdf@asdf.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '닉네임',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'asdfasdf',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
