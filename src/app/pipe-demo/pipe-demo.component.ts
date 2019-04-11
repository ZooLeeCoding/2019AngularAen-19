import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  myDate = new Date();
  nevLista = ['Péter', 'Katalin', 'Elemér', 'Etel'];
  newName='hey';
  toBeTranslated = 'minta';

  pushName() {
    this.nevLista = this.nevLista.concat([this.newName]);
    //this.nevLista.push(this.newName);
  }

  constructor() { }

  ngOnInit() {
  }

}
