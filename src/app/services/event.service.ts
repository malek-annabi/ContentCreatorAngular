import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url="https://ancient-coast-46533.herokuapp.com/event";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) {
  }
  getEvents(){
    console.log(this.url);
    return this.http.get(this.url);
  }
  getEvent(id:string){
    return this.http.get(`${this.url}/${id}`);
  }
  createEvent(data:any): Observable<any> {
    return this.http.post(this.url, data);
  }
  updateEvent(id:string, data:any): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, data);
  }

  deleteEvent(id:string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

    errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}
