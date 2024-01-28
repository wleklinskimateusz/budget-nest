import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsNotEmpty()
  hashedPassword?: string;

  @IsOptional()
  @IsString()
  hashedRefreshToken?: string | null;
}
