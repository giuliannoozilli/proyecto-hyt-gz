import { AuthService } from './pages/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authSvc: AuthService) {}
  isSignedIn = this.authSvc.authenticated();

  title = 'proyecto-hyt-gz';
}
