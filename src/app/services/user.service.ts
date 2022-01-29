import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user/user';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44366"

  constructor(private httpClient:HttpClient) { }

  loginUser(mail:string,password:string):Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl+'/Login?mail='+ mail +'&password=' + password;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }  

  registerUser(user:User){
    let newPath = this.apiUrl + 
  }
}
