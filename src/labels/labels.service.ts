import { Injectable, NotFoundException } from '@nestjs/common';
import { Label, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class LabelsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.LabelCreateInput): Promise<Label> {
    return this.prisma.label.create({ data });
  }

  findAll(): Promise<Label[]> {
    return this.prisma.label.findMany();
  }

  async findOne(id: number): Promise<Label> {
    const label = await this.prisma.label.findUnique({ where: { id } });
    if (!label) {
      throw new NotFoundException('Label not found!');
    }
    return label;
  }

  async update(id: number, data: Prisma.LabelUpdateInput): Promise<Label> {
    try {
      return await this.prisma.label.update({ where: { id }, data });
    } catch {
      throw new NotFoundException('Label not found!');
    }
  }

  async remove(id: number): Promise<Label> {
    try {
      return await this.prisma.label.delete({ where: { id } });
    } catch {
      throw new NotFoundException('Label not found!');
    }
  }
}
