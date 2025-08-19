import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { DealModule } from './deal/deal.module';
import { AnalyseModule } from './analyse/analyse.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule, AuthModule, TaskModule, TicketModule, UserModule, AnalyseModule, DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
