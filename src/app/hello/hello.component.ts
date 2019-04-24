import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservableExampleService } from '../observable-example.service';
import { ExampleServerService } from '../example-server.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  strings = ["Zoltán", "is", "name", "my", "Hello,"];

  serverMessage = '';

  constructor(private router: Router, 
    private observableExample: ObservableExampleService,
    private exampleServer: ExampleServerService) { }

  ngOnInit() {
    /*this.observableExample.callObserver();
    this.exampleServer.getProba().subscribe(data => {
      this.serverMessage = data.message;
    }, error => {
      console.log(error);
    })*/
  }

  logout() {
    /*this.exampleServer.logout().subscribe(data => {
      console.log(data);
      this.router.navigate(["/login"]);
    }, error => {
      console.log(error);
    })*/
  }

  toggleNavigate() {
    this.router.navigate([{outlets: {
      primary: ['world', 'Zoli', {foo: 'bar'}],
      compose: ['content']
    }}]);
  }

}
