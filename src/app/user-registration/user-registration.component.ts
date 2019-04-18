import { Component, OnInit } from '@angular/core';
import { User } from '../util/user';
import { ExampleServerService } from '../example-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  diplomaTypes = ['BSc', 'Msc', 'OKJ', 'szakközép', 'érettségi'];
  submitted = false;

  model = new User('user', '', '', 0, this.diplomaTypes[0], false);

  onSubmit() {
    this.submitted = true;
    this.exampleServer.signup(this.model.username, this.model.password)
    .subscribe(data => {
      this.router.navigate(["login", {msg: data.message}]);
    }, error => {
      console.log(error);
    })
  }

  reset() {
    this.submitted = false;
    //this.model = new User('user', '', '', 0, this.diplomaTypes[0], false);
  }

  constructor(private router: Router, private exampleServer: ExampleServerService) { }

  ngOnInit() {
  }

}
