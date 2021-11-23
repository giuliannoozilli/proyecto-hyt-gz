import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../admin/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios$ = this.serviciosSvc.servicios;
  constructor(private router: Router, private serviciosSvc: ServiciosService) { }

  ngOnInit(): void {
  }

}
