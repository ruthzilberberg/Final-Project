import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseForStudent } from '../models/courseForStudent';


@Injectable({
  providedIn: 'root'
})
export class CourseForStudentService {

  constructor(private http: HttpClient) { }
 
  getCourseForStudent() {
    return this.http.get<CourseForStudent[]>(`${environment.apiUrl}/courseForStudent/getCourseStudent`);
  }
  getTeachingStudent() {
    return this.http.get<CourseForStudent[]>(`${environment.apiUrl}/courseForStudent/getTeachingStudent`);
  }
  getStudentsCourseStudent(){
    return this.http.get<CourseForStudent[]>(`${environment.apiUrl}/courseForStudent/get`);
  }
  getFillCourses(){
  return this.http.get<CourseForStudent[]>(`${environment.apiUrl}/courseForStudent/fillCourseStudent`);
}
  }


