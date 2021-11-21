import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  servicio: Servicio = null;

  navigationExtras: NavigationExtras = {
    state: {
      balue: null,
    },
  };

  constructor(private router: Router, private serviciosSvc: ServiciosService) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state['balue'];
  }

  ngOnInit(): void {
    // redirecciona al intentar entrar a una pagina de detalles sin datos
    if (typeof this.servicio === 'undefined') {
      this.volverLista();
    }
  }

  goToEditar(): void {
    this.navigationExtras.state['balue'] = this.servicio;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  async goToEliminar(): Promise<void> {
    try {
      await this.serviciosSvc.borrarServicios(this.servicio.id);
      this.volverLista();
    } catch (err) {
      console.log(err.message);
    }
    alert('Servicio eliminado de la lista');
  }
  volverLista(): void {
    this.router.navigate(['list']);
  }
}
