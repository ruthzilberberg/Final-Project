import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseForStudent } from '../models/courseForStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) { }
  api = 'http://localhost:51346';

  getStudents(): Observable<Student[]> {

    return this.http.get<Student[]>(this.api + "/getAllStudents");
  }
  splitingToGroups(): Observable<Student[]> {

    return this.http.get<Student[]>(`${environment.apiUrl}/splitingToGroups/`);
  }
  getStudentLeft() {
    return this.http.get<Student[]>(this.api + "/getNumStudentsLeft");
  }
  getNumLeftTeaching() {
    return this.http.get<Student[]>(this.api + "/getNumLeftTeaching");
  }
  getNumEngagedTeaching() {
    return this.http.get<Student[]>(this.api + "/getNumEngagedTeaching");
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/student/` + studentId);
  }
  updateStudent(student: Student): Observable<any> {
    return this.http.put<Student>(`${environment.apiUrl}/student/`, student);
  }
  updateStudentEngaged(student: Student): Observable<any> {
    return this.http.put<Student>(`${environment.apiUrl}/engagedStudent/`, student);
  }
 
  updateStudentCourse(student: Student, courseName: string, teachingName: string): Observable<any> {
    const httpParams = new HttpParams()
      .append('courseName', courseName)
      .append("teachingName", teachingName);
    return this.http.put<any>(`${environment.apiUrl}/studentCourse/`, student, { params: httpParams });
  }
  // updateStudentCourse1(student: string, courseName: string, teachingName: string): Observable<string> {
  //   const str = student + ',' + courseName + ',' + teachingName;
  //   console.log(str);
  //   return this.http.get<string>(`${environment.apiUrl}/stre/` + str);
  // }

  addStudent(student: Student): Observable<any> {
    return this.http.post<Student>(`${environment.apiUrl}/student/`, student);
  }
  saveFileToDatabase(formData: FormData): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append('1', fileToUpload, fileToUpload.name);
    // formData.append()
    console.log(formData);
    debugger;
    return this.http.post<Student>(`${environment.apiUrl}/saveFileToDatabase/`, formData);
  }
  saveFileToDatabase1(path:File): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append('1', fileToUpload, fileToUpload.name);
    // formData.append()
    console.log(path);
    debugger;
    return this.http.post<Student>(`${environment.apiUrl}/saveFileToDatabase/`, path);
  }
  // postFile(fileToUpload: File): Observable<any> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   // return this.http.post<Student>('${environment.apiUrl}/saveFileToDatabase',formData);
  //   return this.http
  //       .post(endpoint, formData, { headers: yourHeadersConfig })


  //   }
  //     // .map(() => { return true; })
  //     // .catch((e) => this.handleError(e));
  // }

}
