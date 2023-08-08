import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWordDto {
  @IsNotEmpty()
  @IsString()
  english: string;

  @IsNotEmpty()
  @IsString()
  korean: string;

  @IsNotEmpty()
  @IsString()
  devMean: string;
}
