import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  addUser(user)
  {
    return this._http.post('/addUser', user).map(data => data.json()).toPromise();
  }

  findUser(user)
  {
    return this._http.post('/findUser', user).map(data => data.json()).toPromise();
  }

  getSession()
  {
    console.log("Within http service check session method.")
    return this._http.get('/getSession').map(data => data.json()).toPromise();
  }
  addBicycle(bicycle)
  {
    console.log("Add bicycle method in http service firing...");
    return this._http.post('/addbicycle', bicycle).map(data => data.json()).toPromise(); 
  }
}
