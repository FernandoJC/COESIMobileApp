import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from "../pages/login/login";
import { LoginProvider } from "../providers/login/login.provider";
import { EncuestaPage } from "../pages/encuestaNSE/encuesta";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = InicioPage;
  rootPage: any = EncuestaPage;

  paginas: Array<{ title: string, component: any, encuesta: string }>;
  // used for an example of ngFor and navigation

  ngOnInit(): void {
    this.paginas = [
      { title: 'Inicio', component: InicioPage, encuesta: '' },
      { title: 'Nivel socioeconómico', component: EncuestaPage, encuesta: 'nse' },
      { title: 'Cerrar sesión', component: LoginPage, encuesta: ''}
    ];
  }

  constructor
  (
    public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    private loginProvider: LoginProvider
  ) 
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  abrirPagina(pagina) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (pagina.component == LoginPage) {
      this.loginProvider.CerrarSesion();
    }
    this.nav.setRoot(pagina.component, {pagina: pagina});
  }
}
