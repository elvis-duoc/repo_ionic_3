import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage{
  mostrarImagen = false;
  constructor(public alertCtrl: AlertController) { }


  displayImage() {
    this.mostrarImagen = !this.mostrarImagen;
  }
}
