import { Injectable } from '@nestjs/common';
import { Prisma, Settings } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class SettingsRepository {
  constructor(private prisma: PrismaService) {}
  async getSettings(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SettingsWhereUniqueInput;
    where?: Prisma.SettingsWhereInput;
    orderBy?: Prisma.SettingsOrderByWithRelationInput;
  }): Promise<Settings[]> {
    const { skip, take, cursor, where, orderBy } = params;
    console.log('secret', process.env.JWT_SECRET);
    return this.prisma.settings.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
