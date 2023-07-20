import { Component } from '@angular/core';

@Component({
  selector: '[app-warning]',
  //templateUrl: './warning.component.html',
  template:
    "<p class='warning'>This is a warning message ! you are in danger !</p>",
  styles: [
    `
      .warning {
        font-size: 1.5em;
        color: red;
        font-weight: 400;
        border: 1px solid orange;
      }
    `,
  ],
})
export class WarningComponent {}
