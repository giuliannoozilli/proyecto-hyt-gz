import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntermediacionComponent } from './intermediacion.component';

const routes: Routes = [{ path: '', component: IntermediacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediacionRoutingModule { }
