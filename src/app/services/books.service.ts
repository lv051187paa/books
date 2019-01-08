import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [
    {
      id: '377222df-f41d-49b0-ba88-7c7e4506a0ad',
      name: 'Harry Potter',
      author: 'Joane Roaling',
      description: 'About the boy who lives',
      link: [
        {
          type: 'epub',
          link: 'link'
        },
        {
          type: 'pdf',
          link: 'link'
        }
      ]
    }
  ];

  constructor() {}

  getBooks = () => of(this.books);

  getBookById = (id: string) => {
    const book = this.books.find((bookItem: Book) => bookItem.id === id);
    return of(book);
  }

  addBook = (book: Book) => {
    this.books.push(book);
    return of(book);
  }

  editBook = (book: Book) => {
    this.books = this.books.map(bookItem => {
      if (bookItem.id === book.id) {
        return book;
      }
      return bookItem;
    });
    return of(book);
  }

  deleteBook = (id: string) => {};
}
