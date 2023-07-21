import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      p {
        font-weight: '600';
        border: 1px solid darkblue;
        padding: 12px;
        width: 50%;
        text-align: center;
        margin: 0 auto;
        font-size: 2em;
        margin-bottom: 3px;
      }

      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
