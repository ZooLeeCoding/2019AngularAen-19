import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleServerService } from '../example-server.service';
import { ListAnimations } from '../util/animations';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  //@HostBinding('@listAnimations')

  strings = ["Zoltán", "is", "name", "my", "Hello,"];

  serverMessage = '';

  constructor(private router: Router, 
    private exampleServer: ExampleServerService) { }

  ngOnInit() {
    this.exampleServer.getProba().subscribe(data => {
      this.serverMessage = data.message;
    }, error => {
      console.log(error);
    });
  }

  pushNewString(str: string) {
    this.strings.push(str);
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
