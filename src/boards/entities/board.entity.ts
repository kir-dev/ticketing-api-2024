import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';
export class Board {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDate()
  createdAt: Date;
}
