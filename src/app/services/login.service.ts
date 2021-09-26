import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const uri = "https://jagadhatri-puja.herokuapp.com";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(user:User) :Observable<any>{
    return this.http.post(uri+'/login',user,httpOptions);
  }
}
