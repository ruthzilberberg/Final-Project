import { Inject, NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MatSnackBar, MatSnackBarConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Course } from '../models/course';
import { CourseForStudent } from '../models/courseForStudent';
import { Student } from '../models/student';
import { CourseForStudentService } from '../services/course-for-student.service';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';
// import { StudentComponent } from './student/student.component/student.component.ts';

@Component({
  selector: 'app-student-insert-update',
  templateUrl: './student-insert-update.component.html',
  styleUrls: ['./student-insert-update.component.scss']
})
export class StudentInsertUpdateComponent implements OnInit {

  constructor(private studentService: StudentService, @Inject(MAT_DIALOG_DATA) public data: Student,private courseService:CourseService,private router:Router,
    public dialogRef: MatDialogRef<StudentInsertUpdateComponent>, private courseForStudentService: CourseForStudentService ,private _snackBar: MatSnackBar, private zone: NgZone) { }
  public currentStudent: Student = new Student();
  public courses: any[] = [];
  public course: Course[] = [];
  public teaching: any[] = [];
  public studentCourse:CourseForStudent[]=[];
  changeCourse: boolean = false;
  studentEngaged: boolean = false;
  courseId:number;
  teachingId:number;
  public students:Student[] = [];
  public student2:Student[] = [];
  c:any;
  ngOnInit() {
    this.getCourseForStudent();
    this.getTeachingStudent();
    this.getCourseStudent();
  }
  change() {
    this.changeCourse = true;
    
  }
  // changeEngaged() {
  //   // console.log(this.data.currentStudent.IsEngaged)
  //   // debugger
  //   // if (this.data.currentStudent.IsEngaged == true) 
  //   // {
  //     this.studentEngaged = true;
  //   // }
  // }


  saveStudent() {

    
    // else if (this.studentEngaged == true) {
    //   this.updateStudentEngaged();
    //   this.studentEngaged = false;
    // }

     if (this.data.currentStudent.StudentId == null) {
      this.addStudent();
    }
    else if (this.changeCourse == true) {
      this.updateStudentCourse();
      this.changeCourse = false;
    }
    else {
      this.updateStudent();
    }
    this.router.navigate(['/student']);
    this.dialogRef.close();
  
  }
  addStudent() {

    this.studentService.addStudent(this.data.currentStudent).subscribe(state => {
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
  public getCourseForStudent() {
    this.courseForStudentService.getCourseForStudent().subscribe(course => {
      this.courses = course;
      console.log(this.courses);
    }, (err) => {
      console.log(err);
    });
  }
  public getTeachingStudent() {
    this.courseForStudentService.getTeachingStudent().subscribe(teaching => {
      this.teaching = teaching;
      console.log(this.courses);
    }, (err) => {
      console.log(err);
    });
  }
  updateStudent() {
    this.studentService.updateStudent(this.data.currentStudent).subscribe(state => {
      const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.zone.run(() => {
      this._snackBar.open(state, 'x', config);
      this.router.navigate(['/student'])
      this.getStudents();
    });
    }, (err) => {
      console.log(err);
    })
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
  updateStudentCourse() {
    
    this.studentService.updateStudentCourse(this.data.currentStudent, this.courses[this.data.currentStudent.StudentId], this.teaching[this.data.currentStudent.StudentId])
      .subscribe(state => {
        const config = new MatSnackBarConfig();
      config.panelClass = ['background-red'];
      config.verticalPosition = 'bottom';
      config.horizontalPosition = 'center';
      
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
      this.zone.run(() => {
        this._snackBar.open(state, 'x', config);
        // this.courseForStudentService.getFillCourses().subscribe(courses => {
        //   this.c= courses;
          // this.getStudents();
        }, (err) => {
          console.log(err);
          
        });
       
   
      }, (err) => {
        console.log(err);
      })
  }
 
  //     getFillCourses() {
  //   this.courseForStudentService.getFillCourses().subscribe(courses => {
  //     this.c= courses;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.c= courses;
    }, (err) => {
      console.log(err);
    });
  }

  getCourseStudent() {
    this.courseForStudentService.getStudentsCourseStudent().subscribe(students => {
      this.studentCourse  = students ;
          console.log(this.studentCourse);
    
    }, (err) => {
      console.log(err);
     });
}


}