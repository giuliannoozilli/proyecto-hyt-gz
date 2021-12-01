import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediacionRoutingModule } from './intermediacion-routing.module';
import { IntermediacionComponent } from './intermediacion.component';


@NgModule({
  declarations: [
    IntermediacionComponent
  ],
  imports: [
    CommonModule,
    IntermediacionRoutingModule
  ]
})
export class IntermediacionModule { }
