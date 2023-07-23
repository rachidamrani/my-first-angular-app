import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  styles: [
    `
      .greaterThanFive {
        color: white;
        font-weight: white;
        padding: 3px;
      }
    `,
  ],
})
export class AppComponent {
  paragraphIsVisible = false;
  clicks = [];

  toggleParagraphVisibility() {
    this.paragraphIsVisible = !this.paragraphIsVisible;
    this.clicks.push(this.clicks.length + 1);
  }
}
