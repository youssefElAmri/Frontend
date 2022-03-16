import { Injectable } from '@angular/core';
const baseUrli = 'http://localhost:8000/formation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${baseUrli}/getallformations`);
  }
  deleteformation(id : any): Observable<void>{
    return this.httpClient.delete<void>(baseUrli+'/deleteformation/'+id);
  } 
  getById(id:any){
    return this.httpClient.get(baseUrli+'/getformationbyid/'+id);
  }
  addformation(formation :any): Observable<any> {
    return this.httpClient.post(baseUrli+ '/addformation', formation);
 
   }
   update(id: any, formation: any) {
    return this.httpClient.put(baseUrli + '/updateformateur/' + id, formation);
  }
  
}
