import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      h3 {
        font-weight: '600';
        border: 1px solid darkblue;
        padding: 12px;
        width: 50%;
        text-align: center;
        margin: 0 auto;
        font-size: 2em;
      }

      em {
        color: red;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }
}
