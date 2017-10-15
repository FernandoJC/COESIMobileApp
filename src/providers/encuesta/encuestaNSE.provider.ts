import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENCUESTASNSE } from './fake-encuesta';
import { EncuestaNSE } from '../../models/encuestaNSE.model';

@Injectable()
export class EncuestaNSEProvider {

  constructor(public http: Http) { }

  ObtenerEncuestas(): EncuestaNSE[] {
    return ENCUESTASNSE
  }

}
