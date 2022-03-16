import { Injectable } from '@angular/core';
const baseUrli = 'http://localhost:8000/emploi';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${baseUrli}/getallemplois`);
  }
  deleteemploi(id : any): Observable<void>{
    return this.httpClient.delete<void>(baseUrli+'/deleteemploi/'+id);
  } 
  addemploi(emploi :any): Observable<any> {
    return this.httpClient.post(baseUrli+ '/addemploi', emploi);
 
   }
   update(id: any, emploi: any) {
    return this.httpClient.put(baseUrli + '/updateemploi/' + id, emploi);
  }
  getById(id:any){
    return this.httpClient.get(baseUrli+'/getemploibyid/'+id);
  }
}