import { TicketPhase } from '@prisma/client';
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class Ticket {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(TicketPhase)
  phase: TicketPhase;

  @IsInt()
  boardId: number;

  @IsDate()
  createdAt: Date;
}
