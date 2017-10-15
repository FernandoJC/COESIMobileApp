import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

//Páginas
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { EncuestaPage } from '../pages/encuestaNSE/encuesta';
import { EncuestaDetallePage } from '../pages/encuestaNSE/encuesta-detalle/encuesta-detalle';

//Providers
import { LoginProvider } from '../providers/login/login.provider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { JsonHandlerProvider } from '../providers/json-handler/json-handler';
import { EncuestaNSEProvider } from '../providers/encuesta/encuestaNSE.provider';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    LoginPage,
    EncuestaPage, EncuestaDetallePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    LoginPage,
    EncuestaPage, EncuestaDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ApiProvider,
    JsonHandlerProvider,
    EncuestaNSEProvider
  ]
})
export class AppModule {}
