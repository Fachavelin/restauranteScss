import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full',
    data: { animation: 'inicio' },
  },
  {
    path: 'menu',
    component: MenuComponent,
    data: { animation: 'menu' },
  },
  {
    path: 'galeria',
    component: GaleriaComponent,
    data: { animation: 'galeria' },
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { animation: 'contacto' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
