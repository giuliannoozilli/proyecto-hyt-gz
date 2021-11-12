import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './iniciarsesion.component';

const routes: Routes = [{ path: '', component: IniciarsesionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IniciarsesionRoutingModule { }
