import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      balue: null,
    },
  };

  fakeData = [
    {
      nombreserv: 'Hotel De Glace',
      ubicacion: 'España 123',
      formacontacto: 'deglace@gmail.com',
      descripcion: 'Hotel construido en hielo y nieve',
    },
    {
      nombreserv: 'GALLERY HOTEL ART',
      ubicacion: 'Juan Domingo Peron 635',
      formacontacto: 'artez@gmail.com',
      descripcion: 'En su interior alberga auténticas obras de arte',
    },
    {
      nombreserv: 'PALMS CASINO RESORT',
      ubicacion: 'Paraguay 143',
      formacontacto: 'palmcasino@resort.com',
      descripcion: 'Decorada al estilo Playboy',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToEditar(item: any): void {
    this.navigationExtras.state['balue'] = item;
    this.router.navigate(['editar'], this.navigationExtras);
  }
  goToVerDetalles(item: any): void {
    this.navigationExtras.state['balue'] = item;
    this.router.navigate(['detalles'], this.navigationExtras);
  }
  goToEliminar(item: any): void {
    alert('Servicio eliminado de la lista');
  }
}
