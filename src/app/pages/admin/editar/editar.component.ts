import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  servicio: Servicio;
  servicioForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviciosSvc: ServiciosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state?.['balue'];
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.servicio === 'undefined') {
      // redireccionar
      this.router.navigate(['agregar']);
    } else {
      this.servicioForm.patchValue(this.servicio);
    }
  }

  onGuardar(): void {
    alert('Cambios Guardados');
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

  private initForm(): void {
    this.servicioForm = this.fb.group({
      nombreserv: [''],
      // tipodeserv: [''],
      precio: [''],
      ubicacion: [''],
      formacontacto: [''],
      // imagen: [''],
      descripcion: [''],
    });
  }
}
