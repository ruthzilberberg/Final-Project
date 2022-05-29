import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeachingAvailability } from '../models/teachingAvailability';

@Injectable({
  providedIn: 'root'
})
export class TeachingAvailabilityService {

  constructor(private http:HttpClient) { }

  getAvailablityById(teacherId:number): Observable<TeachingAvailability> {
    return this.http.get<TeachingAvailability>(`${environment.apiUrl}/availability/`+ teacherId);
  }
  updateAvailablity(teaching: TeachingAvailability): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/teachingAvailability/`,teaching);
  }
  
}
