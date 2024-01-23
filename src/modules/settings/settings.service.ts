import { Injectable } from '@nestjs/common';
import { SettingsRepository } from './settings.repository';

@Injectable()
export class SettingsService {
  constructor(private repository: SettingsRepository) {}

  async getSettings() {
    const tweets = await this.repository.getSettings({});
    return tweets;
  }
}
