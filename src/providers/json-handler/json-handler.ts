import { Injectable } from '@angular/core';


@Injectable()
export class JsonHandlerProvider {

  constructor() { }

  RespuestaValida(Respuesta: any): boolean {
    try {
      let respuesta: Response = Respuesta;

      if (respuesta.toString().length == 0) {
        return false
      }

      if (respuesta.json()) {
        return true
      }

    } catch (ex) {
      return false
    }
  }
}
