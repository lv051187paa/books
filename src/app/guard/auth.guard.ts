import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return !!this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
      }
    });
  }
}
