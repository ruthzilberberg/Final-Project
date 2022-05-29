import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  course: Course;
courses:Course[]=[];
  constructor(private courseService:CourseService,@Inject(MAT_DIALOG_DATA) public data: Course,public dialogRef: MatDialogRef<UpdateCourseComponent>
  ,private _snackBar: MatSnackBar, private zone: NgZone,) { 
   
  }
  public  currentCourse: Course = new Course();
 public teacherId: number;
 c:Course=new Course();

  ngOnInit() {
    console.log(this.data)
    this.getCourses();
    // let newTeacherComp=new TeacherComponent();
  }
  saveTeacher(){
         if(this.data.currentCourse.CourseId==null)
   {
    this.addCourse();
   }
    else
     {
     this.updateCourse();
   }
   this.dialogRef.close();
   }
 
  addCourse() {
    this.courseService.addCourse(this.data.currentCourse).subscribe(state => {
      const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.zone.run(() => {
      this._snackBar.open(state, 'x', config);
    });
    }, (err) => {
      console.log(err);
    });
  }
  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    }, (err) => {
      console.log(err);
    });
  }
  updateCourse() {
    if(this.c.CourseName!=null)
    this.data.currentCourse.CourseName=this.c.CourseName;
    debugger;
    this.courseService.updateCourse(this.data.currentCourse).subscribe(state => {
      const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.zone.run(() => {
      this._snackBar.open(state, 'x', config);
    });
    }, (err) => {
      console.log(err);
    })
  }

  
}
