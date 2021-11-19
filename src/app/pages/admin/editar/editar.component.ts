import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  servicio: Servicio = null;

  servicioForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
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
    console.log('Cambios Guardados', this.servicioForm.value);
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
