import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage{

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
