import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'The title of the book',
    example: 'The Great Gatsby',
  })
  title: string;

  @ApiProperty({
    description: 'The author of the book',
    example: 'F. Scott Fitzgerald',
  })
  author: string;

  @ApiProperty({ description: 'The price of the book', example: 15.99 })
  price: number;

  @ApiProperty({
    description: 'A short description of the book',
    example: 'A classic novel.',
  })
  description: string;
}
