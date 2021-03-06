import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'cuentacreada',
    loadChildren: () => import('./cuentacreada/cuentacreada.module').then( m => m.CuentacreadaPageModule)
  },
  {
    path: 'acceso',
    loadChildren: () => import('./acceso/acceso.module').then( m => m.AccesoPageModule)
  },
  {
    path: 'olvidarclave',
    loadChildren: () => import('./olvidarclave/olvidarclave.module').then( m => m.OlvidarclavePageModule)
  },
  {
    path: 'dual',
    loadChildren: () => import('./dual/dual.module').then( m => m.DualPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },  {
    path: 'accesoalumno',
    loadChildren: () => import('./accesoalumno/accesoalumno.module').then( m => m.AccesoalumnoPageModule)
  },
  {
    path: 'loginalumno',
    loadChildren: () => import('./loginalumno/loginalumno.module').then( m => m.LoginalumnoPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
