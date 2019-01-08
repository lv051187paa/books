import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.authService.checkAuth().subscribe(auth => {
      if (auth) { this.router.navigate(['/panel']); }
    });
  }

  onLogin = () => {
    this.authService
      .login(this.email, this.password)
      .then(user => this.router.navigate(['/panel']))
      .catch(err => console.log(err));
  }
}
