import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrli = 'http://localhost:8000/admin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private httpclient: HttpClient) { }

  login(admin : any){


    return this.httpclient.post(baseUrli+ '/login', admin);

   }
   isLoggedIn(){

    let token =localStorage.getItem('tkn');

    if(token){
      return true ;
    }else{
      return false;
    }

   }


   getUserData(){

      let token = localStorage.getItem('tkn');

      if(token){

        let data = JSON.parse( window.atob( token.split('.')[1] ) )
        return data;


      }

   }

}
