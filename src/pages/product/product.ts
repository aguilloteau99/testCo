import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../classes/Product";
import {APIFact} from "../../api/APIFact";
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  API;
  error = '';
  id: number;
  product = new Product();

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.id = this.navParams.get('id');
    this.API = APIFact.getAPI(http);
    this.getProduct(this.id);
  }

  getProduct(id: number){
    this.API.getDataFromURL('product/'+id).then(
      product => {
        this.product.fromJSON(product);
        console.log(product);
      }
    );
    this.error = this.API.error;
  }

  postProductFavorite(id: number){
    this.API.postDataFromURL('productFavorite/'+id);
    this.error = this.API.error;
  }

  deleteProductFavorite(id: number){
    this.API.deleteDataFromURL('productFavorite/'+id);
  }

}
