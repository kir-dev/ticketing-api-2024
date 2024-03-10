import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { TicketsModule } from './tickets/tickets.module';
import { LabelsModule } from './labels/labels.module';

@Module({
  imports: [
    TicketsModule,
    PrismaModule.forRoot({ isGlobal: true }),
    BoardsModule,
    LabelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
