import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportacionComponent } from './transportacion.component';

const routes: Routes = [{ path: '', component: TransportacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportacionRoutingModule { }
