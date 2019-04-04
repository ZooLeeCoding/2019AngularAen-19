import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-registration-reactive',
  templateUrl: './user-registration-reactive.component.html',
  styleUrls: ['./user-registration-reactive.component.css']
})
export class UserRegistrationReactiveComponent implements OnInit {

  username = new FormControl('user');

  constructor() { }

  ngOnInit() {
  }

  setDefault() {
    this.username.setValue('New User');
  }

}
