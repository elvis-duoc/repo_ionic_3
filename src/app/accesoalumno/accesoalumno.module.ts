import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoalumnoPageRoutingModule } from './accesoalumno-routing.module';

import { AccesoalumnoPage } from './accesoalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoalumnoPageRoutingModule
  ],
  declarations: [AccesoalumnoPage]
})
export class AccesoalumnoPageModule {}
