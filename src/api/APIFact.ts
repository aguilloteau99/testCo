import {api} from "./api";
import {HttpClient} from "@angular/common/http";

export class APIFact{
  static API = null;
  static getAPI(http: HttpClient){
    if(this.API == null){
      this.API = new api(http);
    }
    return this.API;
  }
}
