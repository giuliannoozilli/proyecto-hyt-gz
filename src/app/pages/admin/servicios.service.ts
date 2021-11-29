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
  guardarServicio(servicio: Servicio, servId: string): Promise<void> {
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

  private urlImagen: string = '';

  subirImagen(file: File, servicio: Servicio, servId?: string) {
    const imagenPath = `Servicios/${file.name}`;
    const imageRef = this.storage.ref(imagenPath);
    const tarea = this.storage.upload(imagenPath, file);

    tarea
      .snapshotChanges()
      .pipe(
        finalize(() => {
          imageRef.getDownloadURL().subscribe((imagenUrl) => {
            this.urlImagen = imagenUrl;
            servicio.imagenUrl = this.urlImagen;
            /*if(servId) { // ?
              this.guardarServicio
            }*/
            this.guardarServicio(servicio, servId);
          });
        })
      )
      .subscribe();
  }
}
