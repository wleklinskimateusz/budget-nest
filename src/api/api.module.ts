import { Module } from '@nestjs/common';
import { SettingsModule } from 'src/modules/settings/settings.module';
import { ApiController } from './api.controller';

@Module({
  imports: [SettingsModule],
  controllers: [ApiController],
})
export class ApiModule {}
