import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AccessTokenGuard } from '../common/guards/accessToken.guard';
import { RefreshTokenGuard } from '../common/guards/refreshToken.guard';
import { SignInDto } from './SignInDto';
import { JwtRequest } from './types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  @UseGuards(AccessTokenGuard)
  getProfile(@Request() req: JwtRequest) {
    return req.user;
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  @UseGuards(AccessTokenGuard)
  logout(@Request() req: JwtRequest) {
    const id = req.user?.['sub'];
    if (!id) {
      throw new Error('User not found');
    }
    this.authService.logout(id);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Request() req: JwtRequest) {
    const userId = req.user?.['sub'];
    const refreshToken = req.user?.['refreshToken'];
    if (!userId || !refreshToken) {
      throw new Error('User not found');
    }
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
