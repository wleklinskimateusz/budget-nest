import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { SettingsModule } from './modules/settings/settings.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        '.env.local',
        '.env.development.local',
        '.env.production',
        '.env',
      ],
    }),
    SettingsModule,
    ApiModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
