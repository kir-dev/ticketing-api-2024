import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketWithLabels } from './dto/ticket-with-labels';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: CreateTicketDto): Promise<Ticket> {
    return this.prisma.ticket.create({ data });
  }

  async findAll(): Promise<TicketWithLabels[]> {
    return this.prisma.ticket.findMany({ include: { labels: true } });
  }

  async findOne(id: number): Promise<TicketWithLabels> {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: { labels: true },
    });
    if (!ticket) {
      throw new NotFoundException('Ticket not found!');
    }
    return ticket;
  }

  async update(id: number, data: UpdateTicketDto): Promise<Ticket> {
    try {
      return await this.prisma.ticket.update({ where: { id }, data });
    } catch {
      throw new NotFoundException('Ticket not found!');
    }
  }

  async remove(id: number): Promise<Ticket> {
    try {
      return await this.prisma.ticket.delete({ where: { id } });
    } catch {
      throw new NotFoundException('Ticket not found!');
    }
  }

  async addLabel(id: number, labelId: number) {
    try {
      return await this.prisma.ticket.update({
        where: { id },
        data: { labels: { connect: { id: labelId } } },
      });
    } catch {
      throw new BadRequestException('Invalid parameters!');
    }
  }

  async removeLabel(id: number, labelId: number) {
    try {
      return await this.prisma.ticket.update({
        where: { id },
        data: { labels: { disconnect: { id: labelId } } },
      });
    } catch {
      throw new BadRequestException('Invalid parameters!');
    }
  }
}
