import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAllJSDocTags } from 'typescript';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClipService {
  private url="http://localhost:3001/";
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
  createClip(data:any): Observable<any> {
    return this.http.post(this.url, data);
  }
  updateClip(id:string, data:any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteClip(id:string): Observable<any> {
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
