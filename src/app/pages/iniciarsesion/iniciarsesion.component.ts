import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css'],
})
export class IniciarsesionComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  public email: string;
  public password: string;

  onLogin(): void {
    console.log('email: ', this.email);
    console.log('password: ', this.password);
    this.authService
      .loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      })
      .catch((err) => console.log(err.message));
  }
  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/list']);
  }
  ngOnInit(): void {}
}
