import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  createServerStatus = "There is no server created yet!";
  serverName = '';
  serverCreated = false;

  servers = ['server1', 'server2', 'server3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.createServerStatus = "Server is created now!";
  }

  getServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }



}
