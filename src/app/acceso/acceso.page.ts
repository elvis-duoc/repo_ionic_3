import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage{

  constructor(public alertCtrl: AlertController) { }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Error',  
      subHeader: '',  
      message: 'Cámara no compatible con la aplicación',  
      buttons: ['Cerrar']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
}
