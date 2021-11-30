import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientoComponent } from './alojamiento.component';

const routes: Routes = [{ path: '', component: AlojamientoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlojamientoRoutingModule { }
