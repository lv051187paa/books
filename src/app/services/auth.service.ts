import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login = (email: string, password: string) =>
    new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(user => resolve(user))
        .catch(err => reject(err));
    })

  checkAuth = () => this.afAuth.authState;

  logout = () =>
    this.afAuth.auth.signOut().then(res => this.router.navigate(['/login']))
}
