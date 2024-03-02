import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
