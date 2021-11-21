import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarsesionRoutingModule } from './iniciarsesion-routing.module';
import { IniciarsesionComponent } from './iniciarsesion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IniciarsesionComponent],
  imports: [CommonModule, IniciarsesionRoutingModule, FormsModule],
})
export class IniciarsesionModule {}
