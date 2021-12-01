import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Observable<any>;
  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, pass).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
    });
  }
  logoutUser() {
    return this.afAuth.signOut();
  }
  authenticated(): boolean {
    console.log(this.user);
    return this.user != null;
  }
}
