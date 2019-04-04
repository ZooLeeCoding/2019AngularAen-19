import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableExampleService } from '../observable-example.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private router: Router, 
    private observableExample: ObservableExampleService) { }

  ngOnInit() {
    this.observableExample.callObserver();
  }

  toggleNavigate() {
    this.router.navigate([{outlets: {
      primary: ['world', 'Zoli', {foo: 'bar'}],
      compose: ['content']
    }}]);
  }

}
