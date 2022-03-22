import { Injectable } from '@angular/core';
const baseUrli = 'http://localhost:8000/admin';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }



  getById(id:any){

    return this.httpClient.get(baseUrli+'/getadminbyid/'+ id);
  }
}
