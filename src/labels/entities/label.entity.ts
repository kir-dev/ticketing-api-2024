import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class Label {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsDate()
  createdAt: Date;
}
