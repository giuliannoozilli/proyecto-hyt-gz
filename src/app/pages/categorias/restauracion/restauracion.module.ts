import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauracionRoutingModule } from './restauracion-routing.module';
import { RestauracionComponent } from './restauracion.component';


@NgModule({
  declarations: [
    RestauracionComponent
  ],
  imports: [
    CommonModule,
    RestauracionRoutingModule
  ]
})
export class RestauracionModule { }
