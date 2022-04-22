import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../author';

@Component({
  selector: `author-detail`,
  template: `
  <div>
  {{author.firstName}} {{author.lastName}}
  <button style="margin-left: 10px" (click)="select.emit(author)">Select</button>
</div>
  `,
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output('selected') select = new EventEmitter<Author>();
}
