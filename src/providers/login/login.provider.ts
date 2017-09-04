import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Usuario } from "../../models/usuario.model";
import { ApiProvider } from "../api/api";
import { JsonHandlerProvider } from "../json-handler/json-handler";

@Injectable()
export class LoginProvider {

  Usuario: Usuario = new Usuario();

  constructor(private http: Http, private api: ApiProvider, private JsonHandler:JsonHandlerProvider) { }

  AutenticarUsuario(usuario: string, password: string) {

    //let headers = new Headers({ 'Content-type': 'application/json' });
    let headers = new Headers();
    headers.append('Accept', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let data = new URLSearchParams();
    data.append('usuario', usuario);
    data.append('password', password);

    let body = data.toString();
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.api.url_login, body, options)
      .map(
        response => (this.JsonHandler.RespuestaValida(response)) 
                    ? (response.json() as Usuario) 
                    : response)
  }

  GuardarUsuario(Usuario: Usuario) {
    this.Usuario = Usuario;
  }

  ObtenerUsuario() {
    return this.Usuario;
  }

  ValidarUsuario(usuario: Usuario): boolean {
    if (usuario.id == 0 || usuario.id == null) {
      return false
    }
    return true
  }

  CerrarSesion() {
    this.Usuario = null;
  }
}
