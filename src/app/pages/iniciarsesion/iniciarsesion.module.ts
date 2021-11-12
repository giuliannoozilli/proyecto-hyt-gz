import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarsesionRoutingModule } from './iniciarsesion-routing.module';
import { IniciarsesionComponent } from './iniciarsesion.component';


@NgModule({
  declarations: [
    IniciarsesionComponent
  ],
  imports: [
    CommonModule,
    IniciarsesionRoutingModule
  ]
})
export class IniciarsesionModule { }
