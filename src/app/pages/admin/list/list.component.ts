import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigationExtras: NavigationExtras = {
    state: {
      data: null,
    },
  };
  goToEditar(item: any): void {
    this.navigationExtras.state.data = item;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  goToVerDetalles(item: any): void {
    this.navigationExtras.state.data = item;
    this.router.navigate(['detalles'], this.navigationExtras);
  }
  goToEliminar(item: any): void {
    alert('Servicio eliminado de la lista');
  }
}
