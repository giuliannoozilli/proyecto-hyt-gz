import { IniciarsesionComponent } from './../../iniciarsesion/iniciarsesion.component';
import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [IniciarsesionComponent],
})
export class ListComponent implements OnInit {
  //declarando la variable email para mostrarlo en list.component.html
  public email$: string | null = '';

  servicios$ = this.serviciosSvc.servicios;
  navigationExtras: NavigationExtras = {
    state: {
      balue: null,
    },
  };

  constructor(
    private router: Router,
    private serviciosSvc: ServiciosService,
    public inicomp: IniciarsesionComponent,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      if (user) {
        this.email$ = user.email;
      }
    });
  }

  goToEditar(item: any): void {
    this.navigationExtras.state['balue'] = item;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  goToVerDetalles(item: any): void {
    this.navigationExtras.state['balue'] = item;
    this.router.navigate(['detalles'], this.navigationExtras);
  }
  async goToEliminar(servId: string): Promise<void> {
    try {
      await this.serviciosSvc.borrarServicios(servId);
    } catch (err) {
      console.log(err.message);
    }
    alert('Servicio eliminado de la lista');
  }
}
