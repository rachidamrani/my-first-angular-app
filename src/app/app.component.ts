import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h3 {
  //       color: darkorange;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'initial server name';

  username = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName + '.';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.username = '';
  }
}
