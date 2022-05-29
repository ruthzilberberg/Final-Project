import { Component, OnInit } from '@angular/core';
import { Secretary } from '../models/secretary';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-engaged-student',
  templateUrl: './engaged-student.component.html',
  styleUrls: ['./engaged-student.component.scss']
})
export class EngagedStudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }
public student: Student = new Student();
students:Student[]=[];
studentTz:string;

  ngOnInit() {
    this.getStudents();
    this.user();
  }
  coordinator:boolean;
  secretary:boolean;
  
  user(){
  if(this.secretaryUser.Permission==3)
  this.coordinator=true;
  else{
  this.secretary=true;
  }
  }
  secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));

  updateStudentEngaged() {
  this.student=this.students.find(s=>s.StudentTz==this.studentTz);
  debugger;
    this.studentService.updateStudentEngaged(this.student).subscribe(state => {  
        alert(state);
        console.log(state);
        // this.getCourses();
      }, (err) => {
        console.log(err);
      })
  }

  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.students  = students ;
          console.log(this.students);
    
    }, (err) => {
      console.log(err);
     });
}
}
