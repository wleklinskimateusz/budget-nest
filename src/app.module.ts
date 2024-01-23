import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.production', '.env'],
    }),
    SettingsModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
