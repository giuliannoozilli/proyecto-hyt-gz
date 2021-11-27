import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/shared/components/models/servicio.interface';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  servicio: Servicio;
  servicioForm: FormGroup;

  urlImage: Observable<string>;

  //imagen
  private file!: File;
  public pathImage: string = '';

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
    console.log('subir', e.target.files[0]);
    // creando caracteres aleatorio para ponerle como id
    const id = Math.random().toString(36).substring(2);
    // escogiendo el arcchivo en si
    var file = e.target.files[0];

    const filePath = `Servicios/servicio-${id}`; // es donde ubico el imagen
    const ref = this.storage.ref(filePath); // crea una referencia del imagenn
    const task = this.storage.upload(filePath, file); // se sube al Storage
    task // crea un url para el imagen para ALMACENARLO en firestore database!
      .snapshotChanges()
      .pipe(finalize(() => (this.urlImage = ref.getDownloadURL())))
      .subscribe();
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

      // Subir imagen!
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
