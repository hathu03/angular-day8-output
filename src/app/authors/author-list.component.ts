import { Component } from '@angular/core';
import { Author, authors } from '../author';

@Component({
  selector: 'author-list',
  template: `
    <author-detail *ngFor = "let author of authors" [author]="author" (select)="onSelected($event)"></author-detail>
    <br>
    <div> 
      current selected author: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
    </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
}
