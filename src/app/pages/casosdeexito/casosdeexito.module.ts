import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosdeexitoRoutingModule } from './casosdeexito-routing.module';
import { CasosdeexitoComponent } from './casosdeexito.component';


@NgModule({
  declarations: [
    CasosdeexitoComponent
  ],
  imports: [
    CommonModule,
    CasosdeexitoRoutingModule
  ]
})
export class CasosdeexitoModule { }
