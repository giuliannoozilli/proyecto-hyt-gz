import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadenosotrosComponent } from './acercadenosotros.component';

const routes: Routes = [{ path: '', component: AcercadenosotrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercadenosotrosRoutingModule { }
