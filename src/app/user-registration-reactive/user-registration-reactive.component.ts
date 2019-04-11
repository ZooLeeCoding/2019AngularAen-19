import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { setDefaultService } from 'selenium-webdriver/opera';

@Component({
  selector: 'app-user-registration-reactive',
  templateUrl: './user-registration-reactive.component.html',
  styleUrls: ['./user-registration-reactive.component.css']
})
export class UserRegistrationReactiveComponent implements OnInit {

  myDate = new Date();
  nevLista = ['Péter', 'Katalin', 'Elemér', 'Etel'];
  newName='hey';

  pushName() {
    this.nevLista.push(this.newName);
  }

  /*signupData = new FormGroup({
    username: new FormControl('user'),
    password: new FormControl('password')
  })*/

  constructor(private fBuilder: FormBuilder) { }

  signupData = this.fBuilder.group({
    username: ['user1', Validators.required],
    password: ['', Validators.minLength(8)],
    email: ['example@example.example'],
    bevasarloLista: this.fBuilder.array([
      this.fBuilder.control('almalé')
    ]),
    lakcim: this.fBuilder.group({
      varos: [''],
      utca: [''],
      iranyitoszam: [6723]
    })
  })

  ngOnInit() {
  }

  get bevasarloLista() {
    return this.signupData.get('bevasarloLista') as FormArray;
  }

  newArrayElement() {
    this.bevasarloLista.push(this.fBuilder.control('new'));
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

  onSubmit() {
    console.log(this.signupData.valid);
    this.setDefault();
  }

}
