import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EncuestaNSE } from '../../../models/encuestaNSE.model';


@Component({
  selector: 'page-encuesta-detalle',
  templateUrl: 'encuesta-detalle.html',
})
export class EncuestaDetallePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  encuesta: EncuestaNSE;  

  ngOnInit(): void {
    this.encuesta = this.navParams.get("encuesta")
  }

}
