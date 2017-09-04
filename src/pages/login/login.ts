import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from "../../providers/login/login.provider";
import { Usuario } from "../../models/usuario.model";
import { InicioPage } from "../inicio/inicio";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  
  usuario:string;
  password:string;

  error_estado: boolean;
  error_mensaje: string;
  
  ngOnInit(): void {
    this.usuario = '';
    this.password = '';
    this.error_estado = false;
    this.error_mensaje = '';
  }

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private loginProvider: LoginProvider
  ) { }

  Autenticar(){
    this.loginProvider.AutenticarUsuario(this.usuario, this.password).subscribe(
      response => this.ProcesarRespuesta(response)
    );
  }

  ProcesarRespuesta(usuario:any){
    if (this.loginProvider.ValidarUsuario(usuario)){
      this.loginProvider.GuardarUsuario(usuario);
      this.navCtrl.setRoot(InicioPage);
    }else{
      this.ProcesarError();
    }
  }

  ProcesarError(){
    this.error_estado = true;
    this.error_mensaje = "Usuario/password incorrectos.";
  }
}
