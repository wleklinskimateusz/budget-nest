import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  username: string;

  @IsNotEmpty()
  password: string;
}
