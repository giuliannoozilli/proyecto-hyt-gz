import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router: Router, private serviciosSvc: ServiciosService) {}

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
