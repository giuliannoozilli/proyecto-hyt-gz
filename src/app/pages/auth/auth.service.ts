import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Observable<any>;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      console.log(user?.email);
    });
  }

  iniciarSesion(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password);
  }
  salirSesion(): Promise<void> {
    return this.auth.signOut();
  }

  get authenticated(): boolean {
    return this.user != null;
  }

  get currentUser(): Observable<any> {
    return this.user;
  }
}
