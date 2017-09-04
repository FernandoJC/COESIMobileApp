import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from "../../models/usuario.model";
import { LoginProvider } from "../../providers/login/login.provider";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage implements OnInit{
  //Declaraciones
  usuario:Usuario;

  //Inicializaciones
  ngOnInit(): void {
    //this.usuario = this.loginProvider.ObtenerUsuario();
    this.usuario = new Usuario();
  }

  //Dependency Injection
  constructor(public navCtrl: NavController, private loginProvider:LoginProvider) {
    
  }

  //Acciones
  

}
