import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealModule } from './deal/deal.module';
import { AnalyseModule } from './analyse/analyse.module';
import { TicketModule } from './ticket/ticket.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [PrismaModule, ClientModule, AuthModule, TaskModule, TicketModule, AnalyseModule, DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
