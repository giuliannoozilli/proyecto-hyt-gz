import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/pages/auth.service';
import { IniciarsesionComponent } from 'src/app/pages/iniciarsesion/iniciarsesion.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();

  constructor(
    //public authIniciar: IniciarsesionComponent,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}
  logout() {
    this.authService.logout();
    this.isLogout.emit();
  }
}
