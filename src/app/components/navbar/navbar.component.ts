import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  userName = '';

  constructor(private afAuth: AuthService) {}

  ngOnInit() {
    this.afAuth.checkAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.userName = auth.email;
      } else {
        this.isLogged = false;
        this.userName = '';
      }
    });
  }

  logout = () => this.afAuth.logout();
}
