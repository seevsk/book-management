import { Component, inject, signal } from "@angular/core";
import { BookService } from "../../services/books.service";
import { ModifyFormComponent } from "../../components/modify/modify-form/modify-form.component";

@Component ({
    templateUrl: 'modify.component.html',
    selector: 'modify-page',
    imports: [ModifyFormComponent]
})

export class ModifyPageComponent {
    private bookService = inject(BookService);
    message = signal('');

    handleUpdate(data: { title: string; quantity: number }) {
        const updated = this.bookService.updateBookQuantity(data.title, data.quantity);
        this.message.set(updated ? 'Libro Modificado.' : 'Libro no coincide con el título.');
    } 
}