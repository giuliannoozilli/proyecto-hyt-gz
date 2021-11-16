import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./pages/servicios/servicios.module').then(
        (m) => m.ServiciosModule
      ),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./pages/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./pages/contacto/contacto.module').then((m) => m.ContactoModule),
  },
  { path: 'iniciarsesion', loadChildren: () => import('./pages/iniciarsesion/iniciarsesion.module').then(m => m.IniciarsesionModule) },
  { path: 'tutorial', loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule) },
  { path: 'list', loadChildren: () => import('./pages/admin/list/list.module').then(m => m.ListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
