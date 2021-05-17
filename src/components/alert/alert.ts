import { Component } from '@angular/core';
import {AlertController} from "ionic-angular";

@Component({
  selector: 'alert',
  templateUrl: 'alert.html'
})
export class AlertComponent {

  constructor(public alertController: AlertController) {
  }

}
