import { Component } from '@angular/core';
import { MakeMoreVisible, FadeInComponent } from './util/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [MakeMoreVisible, FadeInComponent]
})
export class AppComponent {
  visibleText = false;
  
  title = 'router2';

  toggleVisible() {
    this.visibleText = !this.visibleText;
  }
}
