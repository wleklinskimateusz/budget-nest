import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { SettingsRepository } from './settings.repository';
import { SettingsService } from './settings.service';
@Module({
  imports: [PrismaModule],
  providers: [SettingsRepository, SettingsService],
  exports: [SettingsService],
})
export class SettingsModule {}
