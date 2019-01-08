import { Component, OnInit } from '@angular/core';

import { User } from './../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor() {}

  ngOnInit() {}

  onRegister = () => {
    console.log(this.user.email);
  }


}
