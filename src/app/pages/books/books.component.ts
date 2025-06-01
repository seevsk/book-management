import { Component, inject} from "@angular/core";
import { BookFormComponent } from "../../components/books/book-form/book-form.component";
import { BookListComponent } from "../../components/books/book-list/book-list.component";
import { BookService } from "../../services/books.service";

@Component ({
    templateUrl: 'books.component.html',
    selector: 'books-page',
    imports: [BookFormComponent, BookListComponent]
}) 

export class BooksPageComponent {
    public bookService = inject(BookService);
}