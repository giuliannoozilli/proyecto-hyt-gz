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
    path: 'iniciarsesion',
    loadChildren: () =>
      import('./pages/iniciarsesion/iniciarsesion.module').then(
        (m) => m.IniciarsesionModule
      ),
  },
  {
    path: 'tutorial',
    loadChildren: () =>
      import('./pages/tutorial/tutorial.module').then((m) => m.TutorialModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/admin/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'detalles',
    loadChildren: () =>
      import('./pages/admin/detalles/detalles.module').then(
        (m) => m.DetallesModule
      ),
  },
  {
    path: 'editar',
    loadChildren: () =>
      import('./pages/admin/editar/editar.module').then((m) => m.EditarModule),
  },
  {
    path: 'agregar',
    loadChildren: () =>
      import('./pages/admin/agregar/agregar.module').then(
        (m) => m.AgregarModule
      ),
  },
  { path: 'about', loadChildren: () => import('./pages/acercadenosotros/acercadenosotros.module').then(m => m.AcercadenosotrosModule) },
  { path: 'contacto', loadChildren: () => import('./pages/contacto/contacto.module').then(m => m.ContactoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
