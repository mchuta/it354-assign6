import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../messenger.service';


@Component({
  selector: 'app-browser-messages',
  templateUrl: './browser-messages.component.html',
  styleUrls: ['./browser-messages.component.css']
})
export class BrowserMessagesComponent implements OnInit {

  constructor(
    public messengerService: MessengerService
  ) { }

  ngOnInit() {
  }

}
