import { Controller, Get } from '@nestjs/common';
import { SettingsService } from 'src/modules/settings/settings.service';

@Controller('api')
export class ApiController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('settings')
  getSettings() {
    return this.settingsService.getSettings();
  }
}
