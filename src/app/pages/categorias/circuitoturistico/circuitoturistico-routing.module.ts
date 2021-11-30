import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitoturisticoComponent } from './circuitoturistico.component';

const routes: Routes = [{ path: '', component: CircuitoturisticoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircuitoturisticoRoutingModule { }
