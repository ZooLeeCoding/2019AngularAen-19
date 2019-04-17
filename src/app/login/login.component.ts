import { Component, OnInit } from '@angular/core';
import { ExampleServerService } from '../example-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  model = {username: '', password: ''};

  // a helyes login a username: user, és password: 12345
  onSubmit() {
    this.submitted = true;
    this.exampleServer.loginUser(this.model.username, this.model.password)
    .subscribe(data => {
      console.log(data);
      //this.router.navigate(["/hello"]);
    }, error => {
      console.log(error);
    })
  }

  constructor(private exampleServer: ExampleServerService, 
    private router: Router) { }

  ngOnInit() {
  }

}
