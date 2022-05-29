import { Component, NgZone, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';
import { LOCALE_TEXT } from '../models/constans';
// import { MatTableDataSource } from '@angular/material';
import {AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { Secretary } from '../models/secretary';
import { MatSnackBar, MatSnackBarConfig, MatSort } from '@angular/material';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
//   public columnDefs: any[];
//   public rowData;
//   public gridOptions;
//   public gridColumnApi: any;
//   public gridApi: any;
//   public columnTypes;
//   public course: Course = new Course();
//   public courses: Course[] = [];
//   public courseId: number;
  
// states:any[];
//   // truckDialogRef: MatDialogRef<TruckInsertUpdateComponent>;
public course: Course = new Course();
public courses: Course[] = [];
public courseId: number;
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

   constructor(public courseService: CourseService,public dialog:MatDialog ,private _snackBar: MatSnackBar, private zone: NgZone) {
      this.getCourses(); 
    }


   ngOnInit() {
     this.user();
   };
   getCourses() {
      this.courseService.getCourses().subscribe(courses => {
        this.courses = courses;
      }, (err) => {
        console.log(err);
      });
    }
  
    getCourseById() {
      this.courseService.getCourseById(this.courseId).subscribe(state => this.course = state);
    }
  
    
  
    displayedColumns: string[] = ['update','delete','CourseId', 'CourseName','CourseType'];
    dataSource = new MatTableDataSource<Course>(this.courses);
    @ViewChild(MatPaginator, {static: false})  paginator: MatPaginator ;
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    
      this.dataSource.sort = this.sort
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    openDialog(index:number) {
      if(index==-1)
      {
      this.dialog.open(UpdateCourseComponent,{
        // width:'400px',
        // height: '600px',
        
       data: {
        currentCourse:new Course
       }
     });
    }
    else{
      this.dialog.open(UpdateCourseComponent,{
        // width:330px;
        //  height: 400px,
        data: {
          currentCourse: this.courses[index]
        }
      });
    }
  }
  
    deleteCourse( courseId:number,index:number) {
      var x=confirm("התמחות "+this.courses[index].CourseName+ " תמחק מהמערכת");
      if(x){
        this.courseService.deleteCourse(courseId).subscribe(state => {
      const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.zone.run(() => {
      this._snackBar.open(state, 'x', config);
    });
        this.getCourses();
      }, (err) => {
        console.log(err);
      })
      }

    }
  }
  
  

