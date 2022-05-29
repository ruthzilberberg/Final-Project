import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { Student } from '../models/student';
import { CourseForStudentService } from '../services/course-for-student.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.component.html',
  styleUrls: ['./student-group.component.scss']
})
export class StudentGroupComponent implements OnInit {
  public students:Student[] = [];
  public student2:Student[] = [];
  public courses:any[]=[];
  public  teaching:any[]=[];
  constructor(public studentService: StudentService,public courseForStudentService:CourseForStudentService,@Inject(MAT_DIALOG_DATA) public data: Student,
  public dialogRef: MatDialogRef<StudentGroupComponent>) { }
  public currentStudent: Student = new Student();
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.student2  = students ;
     this.students=this.student2;
      console.log(this.students);
    
    }, (err) => {
      console.log(err);
     });
     this.courseForStudentService.getCourseForStudent().subscribe(course => {
      this.courses  = course ;
      console.log(this.courses);
    }, (err) => {
      console.log(err);
     });
     this.courseForStudentService.getTeachingStudent().subscribe(teaching => {
      this.teaching  = teaching ;
      console.log(this.teaching);
    }, (err) => {
      console.log(err);
     });
     
  }
  displayedColumns: string[] = ['StudentFirstName', 'StudentLastName','StudentTz','Grade','Class','IsIncludingTeaching','IsEngaged','IsActive','StudentStandard','Course','Teaching','GroupNumber'];
  // dataSource = new MatTableDataSource<Student>(this.data.currentStudent);
}
