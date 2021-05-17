import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { api } from "../../api/api";
import { User } from "../../classes/User";
import {ListPage} from "../list/list";
import {APIFact} from "../../api/APIFact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  user = new User();
  error = '';
  API;
  id;
  pwd;

  constructor(private http: HttpClient, private navCtrl: NavController) {
    this.API = APIFact.getAPI(http);
  }

  connectAPI(){
    this.API.connectAPI(this.id, this.pwd);
    this.error += this.API.error;
    this.user = this.API.user;
  }

  deconnectAPI(){
    this.user.connect = false;
  }

  goToList(){
    this.navCtrl.push(ListPage);
  }

}
