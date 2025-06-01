import { Component, input } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';

@Component({
  selector: 'books-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
})

export class BookListComponent { 
  books = input.required<Book[]>();
  listBook = input.required<string>();
}
