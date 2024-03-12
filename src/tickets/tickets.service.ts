import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, Ticket } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TicketsService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: Prisma.TicketUncheckedCreateInput): Promise<Ticket> {
    return this.prisma.ticket.create({ data });
  }

  async findAll(): Promise<Ticket[]> {
    return this.prisma.ticket.findMany({ include: { labels: true } });
  }

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: { labels: true },
    });
    if (!ticket) {
      throw new NotFoundException('Ticket not found!');
    }
    return ticket;
  }

  async update(
    id: number,
    data: Prisma.TicketUncheckedUpdateInput,
  ): Promise<Ticket> {
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
