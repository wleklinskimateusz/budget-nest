import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsNotEmpty()
  hashedPassword: string;

  @IsOptional()
  @IsString()
  hashedRefreshToken?: string;
}
