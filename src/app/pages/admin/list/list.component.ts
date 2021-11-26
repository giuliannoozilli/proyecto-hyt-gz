import { IniciarsesionComponent } from './../../iniciarsesion/iniciarsesion.component';
import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [IniciarsesionComponent],
})
export class ListComponent implements OnInit {
  /* ***
  Problema: cuando el usuario inicie sesion, quiero que:
  - se dirige a list html (funciona bien)
  - esconder el header normal y mostrar el header-admin (ambos headers estan en app.component.html)
  - muestre su correo en el list html (para darse la idea que esta logueado)

  Estoy teniendo fallos en los ultimos puntos:

  - ¿Como puede ser el ngIf de cada header para que se esconde el header admin, cuando NO esta logueando y que cuando ESTE logueando que se muestre 3l HEADER ADMIN y que se esconda el HEADER normal?

  - Por logica, estoy llamando bien al variable del email, pero al iniciar sesion, no me figura. Puede ser problemas en pasar la variable "email" de iniciarsesioncomponent a lista.component.ts??
  */
  public email$: string | null= "";

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
    this.authService.user.subscribe(user => {
      if (user) {
        this.email$= user.email;
      }
    })
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
