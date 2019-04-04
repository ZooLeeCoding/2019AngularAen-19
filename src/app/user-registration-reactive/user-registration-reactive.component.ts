import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-registration-reactive',
  templateUrl: './user-registration-reactive.component.html',
  styleUrls: ['./user-registration-reactive.component.css']
})
export class UserRegistrationReactiveComponent implements OnInit {

  signupData = new FormGroup({
    username: new FormControl('user'),
    password: new FormControl('password')
  })

  constructor() { }

  ngOnInit() {
  }

  setDefault() {
    /*this.signupData.setValue({
      username: 'User_zoli',
      password: 'zooooooleeeeeee'
    })*/
    this.signupData.patchValue({
      username: "user_onlyzoolee"
    })
    //this.username.setValue('New User');
  }

}
