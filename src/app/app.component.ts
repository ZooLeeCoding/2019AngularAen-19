import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('makeMoreVisible', [
      state('normal', style({
        backgroundColor: 'white',
        fontSize: "14px",
        color: "black"
      })),
      state('visible', style({
        backgroundColor: 'grey',
        fontSize: '24px',
        color: 'red'
      })),
      transition('normal => visible', [
        animate('3s')
      ]),
      transition('visible => normal', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent {
  visibleText = false;
  
  title = 'router2';

  toggleVisible() {
    this.visibleText = !this.visibleText;
  }
}
