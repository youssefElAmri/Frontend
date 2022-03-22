import { Injectable } from '@angular/core';
const baseUrli = 'http://localhost:8000/feedback';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  getAll() : Observable<any[]> {
    return this.httpClient.get<any[]>(`${baseUrli}/getallfeedback`);
    }
    deleteFeedback(id : any): Observable<void>{
      return this.httpClient.delete<void>(baseUrli+'/deletefeedback/'+id);
    }
    addFeedback(feedback :any): Observable<any> {
      return this.httpClient.post(baseUrli+ '/addfeedback', feedback);

     }
}
