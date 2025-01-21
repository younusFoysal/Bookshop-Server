import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({ required: false })
  title?: string;

  @ApiProperty({ required: false })
  author?: string;

  @ApiProperty({ required: false })
  price?: number;

  @ApiProperty({ required: false })
  description?: string;
}
