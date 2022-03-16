import { Injectable } from '@angular/core';
const baseUrli = 'http://localhost:8000/formateur';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${baseUrli}/getallformateurs`);
  }
  deleteformateur(id: any): Observable<void> {
    return this.httpClient.delete<void>(baseUrli + '/deleteformateur/' + id);
  }
  addformateur(formateur: any): Observable<any> {
    return this.httpClient.post(baseUrli + '/addformateur', formateur);

  }
  update(id: any, formateur: any) {
    return this.httpClient.put(baseUrli + '/updateformateur/' + id, formateur);
  }
  getById(id: any) {
    return this.httpClient.get(baseUrli + '/getformateurbyid/' + id);
  }


}
