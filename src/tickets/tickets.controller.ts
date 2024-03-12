import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() data: Prisma.TicketUncheckedCreateInput) {
    return this.ticketsService.create(data);
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.TicketUncheckedUpdateInput,
  ) {
    return this.ticketsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.remove(id);
  }

  @Patch(':id/labels/:labelId')
  addLabel(
    @Param('id', ParseIntPipe) id: number,
    @Param('labelId', ParseIntPipe) labelId: number,
  ) {
    return this.ticketsService.addLabel(id, labelId);
  }

  @Delete(':id/labels/:labelId')
  removeLabel(
    @Param('id', ParseIntPipe) id: number,
    @Param('labelId', ParseIntPipe) labelId: number,
  ) {
    return this.ticketsService.removeLabel(id, labelId);
  }
}
