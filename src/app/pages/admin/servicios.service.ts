import { Servicio } from './../../shared/components/models/servicio.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  servicios: Observable<Servicio[]>;

  private serviciosCollection: AngularFirestoreCollection<Servicio>;
  constructor(private readonly afs: AngularFirestore) {
    this.serviciosCollection = afs.collection<Servicio>('servicios'); // Creando una coleccion EN FIREBASE y llamandolo "servicios"
    this.getServicios();
  }

  // Elimina
  borrarServicio(servId: string): Promise<void> {}
  guardarServicio(servicio: Servicio, servId: string): Promise<void> {
    // 1:30:47
  }

  // este metodo va a FB, lee la coleccion de empleados y guardar esos servicios en "servicios" (linea 13)
  private getServicios(): void {
    this.servicios = this.serviciosCollection
      .snapshotChanges()
      .pipe(
        map((actions) => actions.map((a) => a.payload.doc.data() as Servicio))
      );
  }
}
