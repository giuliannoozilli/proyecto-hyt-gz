import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercadenosotrosRoutingModule } from './acercadenosotros-routing.module';
import { AcercadenosotrosComponent } from './acercadenosotros.component';


@NgModule({
  declarations: [
    AcercadenosotrosComponent
  ],
  imports: [
    CommonModule,
    AcercadenosotrosRoutingModule
  ]
})
export class AcercadenosotrosModule { }
