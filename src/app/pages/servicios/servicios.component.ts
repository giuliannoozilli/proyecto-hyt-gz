import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../admin/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  servicios$ = this.serviciosSvc.servicios;
  itemSeleccionado: any;

  constructor(private serviciosSvc: ServiciosService) {
    this.itemSeleccionado = this.serviciosSvc.servicios;
  }

  cargarModal(item: any) {
    this.itemSeleccionado = item;
  }

  ngOnInit(): void {}
}
