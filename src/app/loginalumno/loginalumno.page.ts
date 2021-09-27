import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loginalumno',
  templateUrl: './loginalumno.page.html',
  styleUrls: ['./loginalumno.page.scss'],
})
export class LoginalumnoPage {

  constructor(
    public loadingController: LoadingController
  ) {}
  
  login(){
    this.presentLoadingWithOptions();
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Buscando Asignaturas...',
    });
    await loading.present();

  }

}
