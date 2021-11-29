import { finalize, Observable } from 'rxjs';
import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  // Declaracion de propiedades
  servicio: Servicio;
  servicioForm: FormGroup;
  private file?: File;

  public pathImage: string = '';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviciosSvc: ServiciosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state?.['balue'];
    this.initForm();
  }

  onUpload(event) {
    console.log('subir', event.target.files[0]);
    this.file = event.target.files[0];
  }

  ngOnInit(): void {
    if (typeof this.servicio === 'undefined') {
      this.router.navigate(['agregar']);
    } else {
      this.servicioForm.patchValue(this.servicio);
    }
  }

  async onGuardar(): Promise<void> {
    alert('Servicio Publicado');
    console.log(this.servicioForm.value);
    if (this.servicioForm.valid) {
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
