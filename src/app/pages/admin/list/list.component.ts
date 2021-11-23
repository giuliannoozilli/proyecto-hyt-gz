import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { IniciarsesionComponent } from '../../iniciarsesion/iniciarsesion.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  servicios$ = this.serviciosSvc.servicios;
  navigationExtras: NavigationExtras = {
    state: {
      balue: null,
    },
  };

  constructor(
    private router: Router,
    private serviciosSvc: ServiciosService,
    //private authService: AuthService,
    //private iniComp: IniciarsesionComponent
  ) {}

  // email = this.iniComp.user.email;
  ngOnInit(): void {}

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
