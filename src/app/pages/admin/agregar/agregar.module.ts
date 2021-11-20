import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarRoutingModule } from './agregar-routing.module';
import { AgregarComponent } from './agregar.component';

@NgModule({
  declarations: [AgregarComponent],
  imports: [CommonModule, AgregarRoutingModule, ReactiveFormsModule],
})
export class AgregarModule {}
