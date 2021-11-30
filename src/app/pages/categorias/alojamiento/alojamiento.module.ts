import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlojamientoRoutingModule } from './alojamiento-routing.module';
import { AlojamientoComponent } from './alojamiento.component';


@NgModule({
  declarations: [
    AlojamientoComponent
  ],
  imports: [
    CommonModule,
    AlojamientoRoutingModule
  ]
})
export class AlojamientoModule { }
