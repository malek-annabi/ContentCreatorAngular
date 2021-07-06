import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private termSource=new BehaviorSubject('');
  currentTerm=this.termSource.asObservable();
  constructor() { }
  changeTerm(term:string){
    this.termSource.next(term)
  }
}
