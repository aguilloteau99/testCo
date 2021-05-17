import {Component, Input} from '@angular/core';
import {ProductPage} from "../../pages/product/product";
import {NavController} from "ionic-angular";
import {APIFact} from "../../api/APIFact";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

  @Input() productDesignation: string;
  @Input() productId: number;

  constructor(private navCtrl: NavController) {
  }

  goToProduct(id: number){
    this.navCtrl.push(ProductPage, {id: id});
  }

}
