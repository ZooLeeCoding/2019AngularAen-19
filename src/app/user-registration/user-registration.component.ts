import { Component, OnInit } from '@angular/core';
import { User } from '../util/user';

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
  }

  reset() {
    this.submitted = false;
    //this.model = new User('user', '', '', 0, this.diplomaTypes[0], false);
  }

  constructor() { }

  ngOnInit() {
  }

}
