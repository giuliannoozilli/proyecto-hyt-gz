import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscelaneoRoutingModule } from './miscelaneo-routing.module';
import { MiscelaneoComponent } from './miscelaneo.component';


@NgModule({
  declarations: [
    MiscelaneoComponent
  ],
  imports: [
    CommonModule,
    MiscelaneoRoutingModule
  ]
})
export class MiscelaneoModule { }
