import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EncuestaNSE } from '../../models/encuestaNSE.model';
import { EncuestaNSEProvider } from '../../providers/encuesta/encuestaNSE.provider';
import { EncuestaDetallePage } from './encuesta-detalle/encuesta-detalle';


@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, private encuestaNSEProvider: EncuestaNSEProvider) { }

  encuestas: EncuestaNSE[];

  ngOnInit(): void {
    this.encuestas = this.encuestaNSEProvider.ObtenerEncuestas();
  }

  DetalleEncuesta(encuesta: EncuestaNSE) {
    this.navCtrl.push(EncuestaDetallePage, { encuesta: encuesta })  
  }

}
