import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../classes/User";
import {HttpClient} from "@angular/common/http";
import {APIFact} from "../../api/APIFact";
import {Product} from "../../classes/Product";
import {ProductFamily} from "../../classes/ProductFamily";
import {ProductEssence} from "../../classes/ProductEssence";
import {ProductTreatment} from "../../classes/ProductTreatment";
import {ProductVariety} from "../../classes/ProductVariety";
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  error = '';
  API;
  user = new User();
  users = [];
  products = [];
  offsetProduct = 0;
  productPerPage = 10;
  page = 0;
  maxProduct = 0;
  maxPage = 0;
  familyChoose = '';
  essenceChoose = '';
  treatmentChoose = '';
  varietyChoose = '';
  families = [];
  essences = [];
  treatments = [];
  varieties = [];
  productsFavorite = [];
  productFavorite = new Product();

  constructor(private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    this.API = APIFact.getAPI(http);
    this.getAllUsers();
    this.getProducts();
    this.getProductFamilies();
    this.getProductEssence();
    this.getProductTreatment();
    this.getProductVariety();
    this.getProductFavorite();
  }

  getAllUsers(){
    this.API.getDataFromURL('users').then(
      users => {
        this.users = users;
      }
    );
    this.error = this.API.error;
  }

  getProducts(){
    let filter = '';
    if(this.familyChoose != ''){
      filter += '&productFamily='+this.familyChoose;
    }
    if(this.essenceChoose != ''){
      filter += '&productEssence='+this.essenceChoose;
    }
    if(this.treatmentChoose != ''){
      filter += '&productTreatment='+this.treatmentChoose;
    }
    if(this.varietyChoose != ''){
      filter += '&productVariety='+this.varietyChoose;
    }
    this.API.getDataFromURL('products?limit='+this.productPerPage+'&offset='+this.offsetProduct+filter).then(
      products => {
        this.products = [];
        products.forEach((product) => {
          let p = new Product();
          p.fromJSON(product);
          this.products.push(p);
        })
      }
    );
    this.API.getDataFromURL('productsCount?'+filter).then(
      maxProduct => {
        this.maxProduct = maxProduct[0].count;
        if((this.maxProduct.toString().substr(this.maxProduct.toString().length - 1)) == '0'){
          this.maxPage = Math.floor(this.maxProduct / this.productPerPage) - 1;
        }else {
          this.maxPage = Math.ceil(this.maxProduct / this.productPerPage) - 1;
        }
      }
    );
    this.error = this.API.error;
  }

  productPrev(){
    if(this.page <= 0){
      this.page = this.maxPage;
    }else{
      this.page--;
    }
    this.offsetProduct = this.productPerPage * this.page;
    this.getProducts();
  }

  productNext(){
    if(this.page == 0){
      this.page++;
      this.offsetProduct = this.productPerPage;
    }else if(this.page >= this.maxPage){
      this.page = 0;
      this.offsetProduct = this.productPerPage * this.page;
    }else{
      this.page++;
      this.offsetProduct = this.productPerPage * this.page;
    }
    this.getProducts();
  }

  getProductFamilies(){
    this.API.getDataFromURL('productFamily').then(
      families => {
        this.families = [];
        families.forEach((family) => {
          let f = <ProductFamily> family;
          this.families.push(f);
        })
      }
    );
    this.error = this.API.error;
  }

  getProductEssence(){
    this.API.getDataFromURL('productEssence').then(
      essences => {
        this.essences = [];
        essences.forEach((essence) => {
          let e = <ProductEssence> essence;
          this.essences.push(e);
        })
      }
    );
    this.error = this.API.error;
  }

  getProductTreatment(){
    this.API.getDataFromURL('productTreatment').then(
      treatments => {
        this.treatments = [];
        treatments.forEach((treatment) => {
          let t = <ProductTreatment> treatment;
          this.treatments.push(t);
        })
      }
    );
    this.error = this.API.error;
  }

  getProductVariety(){
    this.API.getDataFromURL('productVariety').then(
      varieties => {
        this.varieties = [];
        varieties.forEach((variety) => {
          let v = <ProductVariety> variety;
          this.varieties.push(v);
        })
      }
    );
    this.error = this.API.error;
  }

  getProductWithFilter(){
    this.page = 0;
    this.offsetProduct = 0;
    this.getProducts();
  }

  resetFilter(){
    this.familyChoose = '';
    this.essenceChoose = '';
    this.treatmentChoose = '';
    this.varietyChoose = '';
    this.page = 0;
    this.offsetProduct = 0;
    this.getProducts();
  }

  getProductFavorite(){
    this.API.getDataFromURL('productFavorite').then(
      products => {
        this.productsFavorite = [];
        products.forEach((product) => {
          this.getProduct(product.productFavoriteProductId).then(
            product =>{
              this.productsFavorite.push(product);
            }
          )
        })
      }
    );
    this.error = this.API.error;
  }

  getProduct(id: number){
    let p = new Product();
    return new Promise(
      (resolve) => {
      this.API.getDataFromURL('product/'+id).then(
        product => {
          resolve(p.fromJSON(product));
        }
      );
    });
  }

}
