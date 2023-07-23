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

  toggleParagraphVisibility(event: any) {
    this.paragraphIsVisible = !this.paragraphIsVisible;
    this.clicks.push(parseInt(event.timeStamp));
  }
}
