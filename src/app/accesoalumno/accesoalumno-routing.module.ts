import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesoalumnoPage } from './accesoalumno.page';

const routes: Routes = [
  {
    path: '',
    component: AccesoalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesoalumnoPageRoutingModule {}
