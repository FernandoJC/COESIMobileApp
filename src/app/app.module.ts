import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

//Páginas
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

//Providers
import { LoginProvider } from '../providers/login/login.provider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { JsonHandlerProvider } from '../providers/json-handler/json-handler';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    ListPage, LoginPage
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
    ListPage, LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ApiProvider,
    JsonHandlerProvider
  ]
})
export class AppModule {}
