import { Component } from '@angular/core';
import { MakeMoreVisible } from './util/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [MakeMoreVisible]
})
export class AppComponent {
  visibleText = false;
  
  title = 'router2';

  toggleVisible() {
    this.visibleText = !this.visibleText;
  }
}
