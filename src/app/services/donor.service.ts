import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donor } from '../models/donor/donor';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/response-model';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  apiUrl = "https://localhost:44366/"

  constructor(private httpClient:HttpClient) { }

  addDonor(donor:Donor ):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>
    (this.apiUrl+"postDonor",donor)  }

}
