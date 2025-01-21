import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(book: Partial<Book>): Promise<Book> {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return book;
  }

  async update(id: string, book: Partial<Book>): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
    if (!updatedBook) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return updatedBook;
  }

  async remove(id: string): Promise<Book> {
    const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
    if (!deletedBook) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return deletedBook;
  }
}
