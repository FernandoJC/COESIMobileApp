import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { LoginProvider } from "../providers/login/login.provider";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  paginas: Array<{ title: string, component: any }>;
  // used for an example of ngFor and navigation

  ngOnInit(): void {
    this.paginas = [
      { title: 'Inicio', component: InicioPage },
      { title: 'List', component: ListPage },
      { title: 'Cerrar sesión', component: LoginPage }
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
    this.nav.setRoot(pagina.component);
  }
}
