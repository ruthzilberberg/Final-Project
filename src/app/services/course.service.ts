import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../models/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${environment.apiUrl}/course`);
  }

  getCourseById(courseId:number): Observable<Course> {
    return this.http.get<Course>(`${environment.apiUrl}/course/` + courseId);
  }

  updateCourse(course: Course): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/course/`,course);
  }

  addCourse(course: Course): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/course`, course);
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/course/` + courseId);
  }
}