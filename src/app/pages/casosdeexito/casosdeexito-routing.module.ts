import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasosdeexitoComponent } from './casosdeexito.component';

const routes: Routes = [{ path: '', component: CasosdeexitoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosdeexitoRoutingModule { }
