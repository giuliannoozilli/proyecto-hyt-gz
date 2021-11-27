import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../admin/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  servicios$ = this.serviciosSvc.servicios;
  itemSeleccionado: any;

  constructor(private router: Router, private serviciosSvc: ServiciosService) {}

  cargarModal(item: any) {
    this.itemSeleccionado = item;
  }

  ngOnInit(): void {}
}
