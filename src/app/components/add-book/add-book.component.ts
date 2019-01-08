import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { BooksService } from './../../services/books.service';
import { Router } from '@angular/router';
import { IdService } from 'src/app/services/id.service';
import { HelpersService } from '../../services/helpers.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = {
    name: '',
    description: '',
    author: '',
    link: []
  };

  constructor(
    public bookService: BooksService,
    public router: Router,
    public idGenerator: IdService,
    public helpers: HelpersService
  ) {}

  ngOnInit() {}

  addLink = () => this.book.link.push({ type: 'pdf', link: 'http://' });

  saveBook = (book: Book) => {
    this.bookService
      .addBook({ ...book, id: this.idGenerator.generate() })
      .subscribe((bookItem: Book) => {
        if (bookItem) {
          this.router.navigate(['/panel']);
          this.helpers.showFlash(
            `Book "${bookItem.name}" added to the list`,
            'info'
          );
        }
      },
      error => this.helpers.showFlash(error.message, 'danger'));
  }
}
