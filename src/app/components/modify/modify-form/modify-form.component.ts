import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'modify-update-form',
  imports: [],
  templateUrl: './modify-form.component.html',
})

export class ModifyFormComponent { 
    title = signal('');
    newQuantity = signal(0);

    updatedBook = output<{ title: string; quantity: number }>();

    updateBook() {
      if (!this.title() || this.newQuantity() < 0) {
        return;
      }

      this.updatedBook.emit({
        title: this.title(),
        quantity: this.newQuantity(),
      });

      this.title.set('');
      this.newQuantity.set(0);
  }
}
