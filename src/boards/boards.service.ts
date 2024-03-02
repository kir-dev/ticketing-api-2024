import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BoardsService {
  constructor(readonly prisma: PrismaService) {}

  async create(data: Prisma.BoardCreateInput): Promise<Board> {
    return this.prisma.board.create({ data });
  }

  async findAll(): Promise<Board[]> {
    return this.prisma.board.findMany();
  }

  async findOne(id: number): Promise<Board> {
    const board = await this.prisma.board.findUnique({ where: { id } });
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }

  async update(id: number, data: Prisma.BoardUpdateInput): Promise<Board> {
    try {
      return await this.prisma.board.update({ where: { id }, data });
    } catch {
      throw new NotFoundException('Board not found');
    }
  }

  async remove(id: number): Promise<Board> {
    try {
      return await this.prisma.board.delete({ where: { id } });
    } catch {
      throw new NotFoundException('Board not found');
    }
  }
}
