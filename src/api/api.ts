import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../classes/User";

export class api {

  error = '';
  user = new User();
  URLAPI = 'http://api.bedtech.dioqa.com/0.01/';

  constructor(private http: HttpClient) {
  }

  connectAPI(id: string, pwd: string){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(id+':'+pwd),
      })
    };
      this.http.get(this.URLAPI+'login', httpOptions)
        .subscribe(
          data => {
            this.user.id = data['userId'];
            this.user.accessToken = data['accessToken'];
            this.user.refreshToken = data['refreshToken'];
            this.user.expireAccessToken = data['expireAccessToken'];
            this.user.expireRefreshToken = data['expireRefreshToken'];
            this.user.connect = true;
            console.log('connexion réussi');
          },
          error => {
            this.user.connect = false;
            this.error += error;
            console.log('connexion échouée');
          }
        );
    }

    private getTokenAPI(){
      return new Promise((resolve) => {
        if(Number.parseInt(this.user.expireAccessToken) < Number.parseInt(Date.now().toString().slice(0, 10))){
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer '+this.user.refreshToken,
            })
          };
          this.http.get(this.URLAPI+'token', httpOptions)
            .subscribe(
              data => {
                this.user.accessToken = data['accessToken'];
                this.user.refreshToken = data['refreshToken'];
                this.user.expireAccessToken = data['expireAccessToken'];
                this.user.expireRefreshToken = data['expireRefreshToken'];
                this.user.connect = true;
                resolve(this.user.accessToken);
              },
              error => {
                this.user.connect = true;
                this.error += error;
              }
            );
        }else{
          resolve(this.user.accessToken);
        }
      })

    }

    getDataFromURL(URL: string){
      return new Promise((resolve) => {
        this.getTokenAPI().then(
          token => {
            let httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer '+token,
              })
            };
            this.http.get(this.URLAPI+URL, httpOptions)
              .subscribe(
                data => {
                  resolve(data);
                },
                error => {
                  this.error += error;
                }
              );
          }
        );
      })
    }

  postDataFromURL(URL: string){
    return new Promise((resolve) => {
      this.getTokenAPI().then(
        token => {
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer '+token,
            })
          };
          this.http.post(this.URLAPI+URL, {},httpOptions)
            .subscribe(
              data => {
                resolve(data);
              },
              error => {
                this.error += error;
              }
            );
        }
      );
    })
  }

  deleteDataFromURL(URL: string){
    return new Promise((resolve) => {
      this.getTokenAPI().then(
        token => {
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer '+token,
            })
          };
          this.http.delete(this.URLAPI+URL, httpOptions)
            .subscribe(
              data => {
                resolve(data);
              },
              error => {
                this.error += error;
              }
            );
        }
      );
    })
  }

}
