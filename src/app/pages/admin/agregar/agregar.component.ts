import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  servicio: Servicio = null;

  servicioForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviciosSvc: ServiciosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state?.['balue'];
  }

  ngOnInit(): void {
    this.initform();

    if (typeof this.servicio === 'undefined') {
      // redireccionar!
      this.router.navigate(['agregar']);
    } else {
      this.servicioForm.patchValue(this.servicio);
    }
  }

  onGuardar(): void {
    alert('Servicio Publicado');
    console.log(this.servicioForm.value);
    if (this.servicioForm.valid) {
      const servicio = this.servicioForm.value;
      const servicioId = this.servicio?.id || null;
      this.serviciosSvc.guardarServicio(servicio, servicioId);
      this.servicioForm.reset();
    }
  }

  volverLista(): void {
    this.router.navigate(['list']);
  }

  private initform(): void {
    this.servicioForm = this.fb.group({
      nombreserv: ['', [Validators.required]],
      // tipodeserv: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      formacontacto: ['', [Validators.required]],
      // imagen: [''],
      descripcion: ['', [Validators.required]],
    });
  }
}
