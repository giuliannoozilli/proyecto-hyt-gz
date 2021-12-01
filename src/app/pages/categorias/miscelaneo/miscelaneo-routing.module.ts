import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiscelaneoComponent } from './miscelaneo.component';

const routes: Routes = [{ path: '', component: MiscelaneoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscelaneoRoutingModule { }
