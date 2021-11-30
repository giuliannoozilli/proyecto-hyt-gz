import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportacionRoutingModule } from './transportacion-routing.module';
import { TransportacionComponent } from './transportacion.component';


@NgModule({
  declarations: [
    TransportacionComponent
  ],
  imports: [
    CommonModule,
    TransportacionRoutingModule
  ]
})
export class TransportacionModule { }
