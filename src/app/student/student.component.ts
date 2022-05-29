import { NgZone, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSnackBar, MatSnackBarConfig, MatSort, MatTableDataSource } from '@angular/material';
import { CourseForStudent } from '../models/courseForStudent';
import { Secretary } from '../models/secretary';
import { Student } from '../models/student';
import { CourseForStudentService } from '../services/course-for-student.service';
import { StudentService } from '../services/student.service';
import { StudentInsertUpdateComponent } from '../student-insert-update/student-insert-update.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public students: any[] = [];
  public courses:any[]=[];
  public c:any[]=[];
  public  teaching:any[]=[];
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
 // public student: Student= new Student();
  public student2: Student[] = [];
  activeStudents:boolean=null;
  isSearch:boolean=false;
 
  // secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
  // courses:[][];
  constructor(public studentService: StudentService,public courseForStudentService:CourseForStudentService,private dialog:MatDialog
    ,private _snackBar: MatSnackBar, private zone: NgZone,) { 
    this.getStudents();
    this.update();
  }
  
  ngOnInit() {
    this.user();
  }
  // getCourses() {
  //   this.courseService.getCourses().subscribe(courses => {
  //     this.courses = courses;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  openDialog(index:number) {
 
    if(index==-1)
    {
    this.dialog.open( StudentInsertUpdateComponent,{
      width:'400px',
      height: '600px',
      
     data: {
             currentStudent:new Student
     },
   }).afterClosed().subscribe(result => {
    this.getStudents();
    this.ngAfterViewInit();
   });
     }
  else{
    this.dialog.open(StudentInsertUpdateComponent,{
       width:'400px',
       height: '600px',
       
      data: {
        currentStudent: this.students[index]
      },
    }).afterClosed().subscribe(result => {
     this.getStudents();
     this.ngAfterViewInit();
    });
      }
  //this.dialog.open(StudentInsertUpdateComponent).afterClosed().subscribe(() => this.getStudents());
   // this.service.initializeForm();
  //  const dialogConfig = new MatDialogConfig();
  //  //dialogConfig.disableClose = true;
  //  dialogConfig.autoFocus = true;
  //  dialogConfig.width = "60%";
  //  dialogConfig.id = type;
   
  }
  update() {
    this.studentService.getStudents().subscribe(results => {
      if (!results) {
        return;
      }
      console.log(results);
      const DataSource = new MatTableDataSource(results);
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;
    })
  }
  serch(){
    this.isSearch=true;
    this.students=this.student2;
    if(this.activeStudents==false)
   this.students= this.students.filter(s=>s.IsActive==false)


  }
  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.student2  = students ;
     this.students=this.student2;
      console.log(this.students);
    
    }, (err) => {
      console.log(err);
     });
    //  this.courseForStudentService.getFillCourses().subscribe(courses => {
    //       this.c= courses;
    //     }, (err) => {
    //       console.log(err);
    //     });
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
  deleteStudent(studentId:number,index:number) {
    var x=confirm("התלמידה "+this.students[index].StudentFirstName+" "+this.students[index].StudentLastName+ " תמחק מהמערכת");
    if(x){
      this.studentService.deleteStudent(studentId).subscribe(state => {
        const config = new MatSnackBarConfig();
      config.panelClass = ['background-red'];
      config.verticalPosition = 'bottom';
      config.horizontalPosition = 'center';
      this.zone.run(() => {
        this._snackBar.open(state, 'x', config);
        this.getStudents();
      });
    }, (err) => {
      console.log(err);
    })
    }
     
  }
  
  // openDialog(index:number) {
  //   this.dialog.open(UpdateTeacherComponent,{
  //      width:'400px',
  //      height: '600px',
  //     data: {
  //       currentTeacher: this.teachers[index]
  //     }
  //   });
  // }
  displayedColumns: string[] = ['update','delete','StudentFirstName', 'StudentLastName','StudentTz','Grade','Class','IsIncludingTeaching','IsEngaged','IsActive','StudentStandard','Course','Teaching','GroupNumber'];
    dataSource = new MatTableDataSource<Student>(this.students);
    // @ViewChild(MatPaginator, {static: false})  paginator: MatPaginator ;

    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    // }
    
    @ViewChild(MatSort ,{static: true}) sort: MatSort;

    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
    }
  }

