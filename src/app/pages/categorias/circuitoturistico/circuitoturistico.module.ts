import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircuitoturisticoRoutingModule } from './circuitoturistico-routing.module';
import { CircuitoturisticoComponent } from './circuitoturistico.component';


@NgModule({
  declarations: [
    CircuitoturisticoComponent
  ],
  imports: [
    CommonModule,
    CircuitoturisticoRoutingModule
  ]
})
export class CircuitoturisticoModule { }
