import { Servicio } from './../../shared/components/models/servicio.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  servicios: Observable<Servicio[]>;

  private serviciosCollection: AngularFirestoreCollection<Servicio>;
  constructor(
    private readonly afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.serviciosCollection = afs.collection<Servicio>('servicios'); // Creando una coleccion EN FIREBASE y llamandolo "servicios"
    this.getServicios();
  }

  borrarServicios(servId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.serviciosCollection.doc(servId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  // recibe el servicio que queremos GUARDAR/EDITAR junto con su ID
  // servId es por predeterminado NULL
  guardarServicio(servicio: Servicio, servId: string | any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        // referido al resolve
        const id = servId || this.afs.createId(); // ** en caso de no existir el id (la cual, siempre es nuevo), genera un id nuevo a firebase
        const data = { id, ...servicio };
        const result = await this.serviciosCollection.doc(id).set(data); // ** almacena el resultado de la coleccion
        resolve(result);
      } catch (err) {
        // referido al reject
        reject(err.message);
      }
    }); // promesa con la cual si todo vaya bien o algo vaya mal
  }

  // este metodo va a FB, lee la coleccion de empleados y guardar esos servicios en "servicios" (linea 13)
  private getServicios(): void {
    this.servicios = this.serviciosCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Servicio))
      );
  }

  private urlImage: string = '';
  subirImagen(file: File, servicio: Servicio) {
    // creando caracteres aleatorio para ponerle como id
    const id = Math.random().toString(36).substring(2);

    const filePath = `Servicios/servicio-${id}`; // es donde ubico el imagen
    const ref = this.storage.ref(filePath); // crea una referencia del imagenn
    const task = this.storage.upload(filePath, file); // se sube al Storage

    // crea un url para el imagen para ALMACENARLO en firestore database!
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          ref.getDownloadURL().subscribe((imagenUrl) => {
            this.urlImage = imagenUrl;
            servicio.imagenUrl = this.urlImage;
            // this.guardarServicio(servicio);
          })
        )
      )
      .subscribe();
  }
}
