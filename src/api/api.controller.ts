import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { SettingsService } from 'src/modules/settings/settings.service';

@Controller('api')
export class ApiController {
  constructor(private readonly settingsService: SettingsService) {}

  @UseGuards(AccessTokenGuard)
  @Get('settings')
  getSettings() {
    return this.settingsService.getSettings();
  }
}
