import { Global, Module, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export const PRISMA_CLIENT = 'PRISMA_CLIENT';

const prisma = new PrismaClient();

@Global()
@Module({
  providers: [
    {
      provide: PRISMA_CLIENT,
      useValue: prisma,
    },
  ],
  exports: [PRISMA_CLIENT],
})
export class PrismaModule implements OnModuleDestroy {
  async onModuleDestroy() {
    await prisma.$disconnect();
  }
}

