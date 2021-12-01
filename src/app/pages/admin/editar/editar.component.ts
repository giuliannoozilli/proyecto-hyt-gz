import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  private file?: File;

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

  onUpload(event) {
    console.log('Subir Cambios', event.target.files[0]);
    this.file = event.target.files[0];
  }

  async onGuardarEdit(): Promise<void> {
    alert('Cambios Guardados');
    console.log(this.servicioForm.value);
    if ((this.servicioForm.valid, this.file!)) {
      const servicio = this.servicioForm.value;
      const servicioId = this.servicio?.id || null;
      this.serviciosSvc.subirImagen(this.file!, servicio, servicioId);
      this.servicioForm.reset();
    }
  }

  volverLista(): void {
    this.router.navigate(['list']);
  }

  private initForm(): void {
    this.servicioForm = this.fb.group({
      nombreserv: [''],
      tipodeserv: [''],
      precio: [''],
      ubicacion: [''],
      formacontacto: [''],
      imagenUrl: [''],
      descripcion: [''],
    });
  }
}
