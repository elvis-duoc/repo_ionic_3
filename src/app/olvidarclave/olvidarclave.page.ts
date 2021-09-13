import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-olvidarclave',
  templateUrl: './olvidarclave.page.html',
  styleUrls: ['./olvidarclave.page.scss'],
})

export class OlvidarclavePage{

  constructor(public alertCtrl: AlertController) { }

  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Enlace Enviado',  
      subHeader: '',  
      message: 'Te hemos enviado el enlace para cambiar tu contraseña',  
      buttons: ['Cerrar']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }   
}