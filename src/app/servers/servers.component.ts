import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'T';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },5000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }
  
  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
