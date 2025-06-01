import { effect, Injectable, signal } from "@angular/core";
import { Book } from "../interfaces/book.interface";

const loadFromLocalStorage = (): Book[] => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
}

@Injectable({providedIn: 'root'})

export class BookService {
    books = signal<Book[]>(loadFromLocalStorage());

    saveToLocalStorage = effect( () => {
        localStorage.setItem('books', JSON.stringify(this.books()));
    })

    addBook(book: Book){
        this.books.update(
            (list) => [...list, book]
        );  
    }

    updateBookQuantity(title: string, newQuantity: number): boolean {
    const books = this.books();
    const index = books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());

    if (index !== -1) {
    books[index].quantity = newQuantity;
    this.books.set([...books]); 
    return true;
    }

    return false;
}
}

