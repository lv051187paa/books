import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;

  books: Observable<Book[]>;
  book: Observable<Book>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.booksCollection = this.afs.collection<Book>('books');
  }

  getBooks = () => {
    this.books = this.booksCollection.snapshotChanges().pipe(map(collections => collections.map(document => {
      const data = document.payload.doc.data() as Book;
      data.id = document.payload.doc.id;
      return data;
    })));
    return this.books;
  };

  getBookById = (id: string) => {

    return of('');
  }

  addBook = (book: Book) => {

    return of(book);
  }

  editBook = (book: Book) => {

    return of(book);
  }

  deleteBook = (id: string) => {};
}
