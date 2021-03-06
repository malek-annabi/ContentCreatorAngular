import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllJSDocTags } from 'typescript';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClipService {

  private url="https://ancient-coast-46533.herokuapp.com/clip";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) {
  }

  getClips(){
    return this.http.get(this.url);
  }

  getClip(id:string){
    return this.http.get(`${this.url}/${id}`);
  }

  createClip(data:any): Observable<any> {
    return this.http.post(this.url, data);
  }

  updateClip(id:string, data:any): Observable<any> {
    return this.http.patch(`${this.url}/${id}`, data);
  }

  deleteClip(id:string): Observable<any> {
    console.log('service',id)
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
