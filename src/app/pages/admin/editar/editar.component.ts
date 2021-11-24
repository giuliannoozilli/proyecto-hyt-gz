import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
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

  // Para el cloud storage
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private serviciosSvc: ServiciosService,
    private storage: AngularFireStorage
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.servicio = navigation?.extras?.state?.['balue'];
    this.initForm();
  }

  onUpload(e: any) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/servicio-${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task
      .snapshotChanges()
      .pipe(finalize(() => (this.urlImage = ref.getDownloadURL())))
      .subscribe();
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
      tipodeserv: [''],
      precio: [''],
      ubicacion: [''],
      formacontacto: [''],
      imagen: [this.urlImage],
      descripcion: [''],
    });
  }
}
