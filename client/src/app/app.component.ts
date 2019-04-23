import { Component } from '@angular/core';
import { MessengerService } from './messenger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projects';

  constructor(public messengerService: MessengerService) {}
}
