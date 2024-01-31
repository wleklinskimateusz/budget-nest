import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaModule } from 'src/database/prisma.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const mockPrismaService = {
      provide: PrismaService,
      useFactory: () => ({
        user: {
          findUnique: jest.fn(() => {
            console.log('findUnique');
          }),
        },
      }),
    };

    const mockPrismaModule = {
      module: PrismaModule,
      providers: [mockPrismaService],
      global: true,
    };
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, mockPrismaModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (GET)', () => {
    return request(app.getHttpServer()).post('/auth/login').expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
