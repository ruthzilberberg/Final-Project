import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  api = 'http://localhost:51346/Teacher';
  message = { error: '' };
  constructor(private http: HttpClient) { 
      }
  getTeachers(): Observable <Teacher[]> {
    
    return this.http.get<Teacher[]>(`${environment.apiUrl}/teachers`);
  }

  getTeacher(password:string): Observable <Teacher[]> {
   
    return this.http.get<Teacher[]>(this.api+"/getById/"+password );
  }

  putPositionPrecent(teacherTz:string,teacher: Teacher): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/teacher/`+teacherTz,teacher);
  }
  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/teacher/`,teacher);
  }
 
  getGroupsForTeacher(): Observable<any[]> {
    return this.http.get<Student[]>(`${environment.apiUrl}/getStudentGroup`);
  }
addTeacher(teacher: Teacher): Observable<any> {
  return this.http.post<Teacher>(`${environment.apiUrl}/teacher/`,teacher);
}
updateTeachingId(teacher:Teacher): Observable<any> {
  return this.http.put<Teacher>(`${environment.apiUrl}/putTeachingId/`,teacher);
}
calculateStandard(teacher: Teacher): Observable<any> {
  return this.http.put<Teacher>(`${environment.apiUrl}/calculateStandard/`,teacher);
}
deleteTeacher(teacherId: number): Observable<any> {
  return this.http.delete<any>(`${environment.apiUrl}/teacher/` + teacherId);
}
getTeacherById(teacherTz:string): Observable<Teacher> {
  return this.http.get<Teacher>(`${environment.apiUrl}/teacher/` + teacherTz);
}

}
