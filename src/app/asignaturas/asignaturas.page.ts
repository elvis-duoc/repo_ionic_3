import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage {

  constructor(public alertCtrl: AlertController) { }

  async showConfirm() {  
    const confirm = await this.alertCtrl.create({  
      header: 'Confirmar',  
      message: '¿Está seguro que quiere cerrar sesión?',  
      buttons: [  
        {  
          text: 'Cancelar',  
          role: 'cancel',  
          handler: () => {  
            console.log('Cancelar Acción');  
          }  
        },  
        {  
          text: 'Salir',  
          handler: () => {  
            console.log('Cerrando Sesión');  
          }  
        }  
      ]  
    });  
    await confirm.present();  
  }   

}
