import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciarsesionRoutingModule } from './iniciarsesion-routing.module';
import { IniciarsesionComponent } from './iniciarsesion.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [IniciarsesionComponent],
  imports: [
    CommonModule,
    IniciarsesionRoutingModule,
    FormsModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService],
})
export class IniciarsesionModule {}
