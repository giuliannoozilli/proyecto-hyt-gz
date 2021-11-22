import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css'],
})
export class IniciarsesionComponent implements OnInit {
  isSignedIn = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem('user') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  async onSignin(email: string, password: string) {
    await this.authService.signin(email, password);
    if (this.authService.isLoggedIn) this.isSignedIn = true;
  }
  handleLogout() {
    this.isSignedIn = false;
  }
}
