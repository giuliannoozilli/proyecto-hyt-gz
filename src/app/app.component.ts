import { AuthService } from './pages/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public authSvc: AuthService) {
    this.authSvc.user.subscribe(user => {
      if (user) {
        this.isSignedIn = true
      }
      else {
        this.isSignedIn = false
      }
    })
  }
  
  
  
  isSignedIn
  
  title = 'proyecto-hyt-gz';
}
