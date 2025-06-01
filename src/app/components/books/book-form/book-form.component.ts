import { Component, output, signal } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';

@Component({
  selector: 'books-book-form',
  templateUrl: './book-form.component.html',
})

export class BookFormComponent {
  title = signal('');
  author = signal('');
  quantity = signal(0);

  newBook = output<Book>();

  addBook() {
    if (!this.title() || !this.author() || this.quantity() < 0) {
            return;
        }

    const newBook: Book = {
        id: Math.floor(Math.random()*1000),
        title: this.title(),
        author: this.author(),
        quantity: this.quantity(),
      };

      this.newBook.emit(newBook);

      this.resetFields();
    }

    resetFields() {
        this.title.set('');
        this.author.set('');
        this.quantity.set(0);
  }   
}
