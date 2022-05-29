import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secretary } from '../models/secretary';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//import {Student}'../modules/student';


@Injectable({
  providedIn: 'root'
})
export class SecretaryService {
 

  constructor(private http: HttpClient) { }
 
  
  getSecretery(password:string): Observable <Secretary[]> {
   
    return this.http.get<Secretary[]>(`${environment.apiUrl}/getById`+password);
  }

  // addUser(driver: Driver): Observable<any> {
  //   return this.http.post<any>(this.api + "/add", driver);
  // }
  
 //  getSecretaries(): Observable<Student[]> {
   //  return this.http.get<Student[]>(this.api+"/Students");
 //}
 getSendPassword(): Observable<Secretary[]> {
  return this.http.get<Secretary[]>(`${environment.apiUrl}/mail`);
}
getSecretaries(): Observable <Secretary[]> {
      return this.http.get<Secretary[]>(`${environment.apiUrl}/secretaries`);
}

addSecretary(secretary:Secretary): Observable<any> {
  return this.http.post<Secretary>(`${environment.apiUrl}/secretary/`,secretary);
}
deleteSecretary(secretaryId: number): Observable<any> {
  return this.http.delete<any>(`${environment.apiUrl}/secretary/` + secretaryId);
}
updateSecretary(secretary: Secretary): Observable<any> {
  return this.http.put<Secretary>(`${environment.apiUrl}/secretary/`,secretary);
}
}
