import { finalize, Observable } from 'rxjs';
import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';
import { AngularFireStorage } from '@angular/fire/compat/storage';

/*
  Se complica la manera de mostrar el imagen en detalles.component.
  Como puedo mostrarlo sin que sea un arreglo?? como habias hecho? o debe ser asi?

  Ademas, cuando subo un imagen se crean en "c://fakepath//imagen". eso esta bien?
*/
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  servicio: Servicio;
  servicioForm: FormGroup;

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

  urlImage: Observable<string>;
  uploadPercent: Observable<number>;
  public pathImage: string = '';

  onUpload(e) {
    console.log('subir', e.target.files[0]);
    const fileimg = e.target.files[0];
    // creando caracteres aleatorio para ponerle como id
    const id = Math.random().toString(36).substring(2);

    const filePath = `Servicios/servicio-${id}`; // es donde ubico el imagen
    const ref = this.storage.ref(filePath); // crea una referencia del imagenn
    const task = this.storage.upload(filePath, fileimg); // se sube al Storage

    this.uploadPercent = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(finalize(() => (this.urlImage = ref.getDownloadURL())))
      .subscribe();
    // this.serviciosSvc.subirImagen;
  }

  /*obtenerImg() {
    return this.file;
  }*/

  ngOnInit(): void {
    if (typeof this.servicio === 'undefined') {
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
