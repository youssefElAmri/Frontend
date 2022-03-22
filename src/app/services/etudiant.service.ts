import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrli = 'http://localhost:8000/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private httpClient : HttpClient) { }

    getAll() : Observable<any[]> {
      return this.httpClient.get<any[]>(`${baseUrli}/getalletudiants`);
      }

      addetudiant(etudiant :any): Observable<any> {
        return this.httpClient.post(baseUrli+ '/addetudiant', etudiant);

       }

    deleteEtudiant(id : any): Observable<void>{
      return this.httpClient.delete<void>(baseUrli+'/deleteetudiant/'+id);
    }

    update(id:any,etudiant:any){
      return this.httpClient.put(baseUrli+'/updateetudiant/'+ id, etudiant);
    }
    updatepass(id:any,etudiant:any){
      return this.httpClient.put(baseUrli+'/updateetudiantpass/'+ id, etudiant);
    }
    getById(id:any){
      return this.httpClient.get(baseUrli+'/getetudiantbyid/'+id);
    }


}
