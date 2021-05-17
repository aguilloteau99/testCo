export class User{
  private _id;
  private _accessToken;
  private _refreshToken;
  private _expireAccessToken;
  private _expireRefreshToken;
  private _connect;

  constructor() {
    this._connect = false;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get accessToken() {
    return this._accessToken;
  }

  set accessToken(value) {
    this._accessToken = value;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  set refreshToken(value) {
    this._refreshToken = value;
  }

  get expireAccessToken() {
    return this._expireAccessToken;
  }

  set expireAccessToken(value) {
    this._expireAccessToken = value;
  }

  get expireRefreshToken() {
    return this._expireRefreshToken;
  }

  set expireRefreshToken(value) {
    this._expireRefreshToken = value;
  }

  get connect() {
    return this._connect;
  }

  set connect(value) {
    this._connect= value;
  }

  toString(){
    return 'id: '+this._id+', accessToken: '+this._accessToken+', refreshToken: '+this._refreshToken+',  expireAccessToken: '+this._expireAccessToken+ ', expireRefreshToken: '+this._expireRefreshToken +',  connect: '+this._connect;
  }

}
