import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public email:any;
  public password:any;
  

  constructor(
    public loadingController: LoadingController
  ) {}
  
  login(){
    this.presentLoadingWithOptions();
  }
  
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 5000,
      message: 'Buscando Secciones...',
    });
    await loading.present();

  }
}