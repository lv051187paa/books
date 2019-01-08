import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Book } from '../../models/Book';
import { BooksService } from '../../services/books.service';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: string;
  book: Book;

  constructor(
    public bookService: BooksService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public helpers: HelpersService
  ) {}

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.bookService
      .getBookById(this.bookId)
      .subscribe(book => (this.book = book));
  }

  editBook = () => {
    this.bookService.editBook(this.book).subscribe(
      (book: Book) => {
        if (book) {
          this.router.navigate(['/panel']);
          this.helpers.showFlash(`Book "${book.name}" edited`, 'info');
        }
      },
      error => this.helpers.showFlash(error.message, 'danger')
    );
  }
}
