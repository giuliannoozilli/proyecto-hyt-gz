import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';

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

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state['balue'];
  }

  ngOnInit(): void {
    // redirecciona al intentar entrar a una pagina de detalles sin datos
    if (typeof this.servicio === 'undefined') {
      this.router.navigate(['list']);
    }
  }

  goToEditar(): void {
    this.navigationExtras.state['balue'] = this.servicio;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  onDelete(): void {
    alert('Servicio eliminado de la lista');
  }
  volverLista(): void {
    this.router.navigate(['list']);
  }
}
