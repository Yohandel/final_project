import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl:string = 'https://budget-calculator-back.herokuapp.com'
  constructor( private http: HttpClient) { }


  getData(){
     return this.http.get<Budget[]>(`${this.apiUrl}/data`)
  }

  setData(budget:Budget): Observable<any>{
    return this.http.post(`${this.apiUrl}/data`, budget)
   
  }

  deleteData(id:number){
    return this.http.delete(`${this.apiUrl}/data/${id}`)
  }

  
}
