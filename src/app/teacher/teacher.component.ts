// import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import {Teacher } from '../models/teacher';
import { TeacherService } from '../services/teacher.service';
// import { MatTableDataSource } from '@angular/material';
// import { MatPaginator } from '@angular/material';
import {AfterViewInit, Component, ViewChild,OnInit, NgZone } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTeacherComponent } from '../update-teacher/update-teacher.component';
import { MatIconModule } from '@angular/material/icon';
import { Secretary } from '../models/secretary';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})

export class TeacherComponent implements OnInit {
  showFiller = false;
  usersUri='http://localhost:51346/student';
  users:any;
  // user:any;
  precent:boolean=false;
    message = { error: '' };
  public teacher: Teacher = new Teacher();
  public teachers: Teacher[] = [];
  public teacherTz: string;
//  public positionPercent:string;
teacherUser: Teacher = JSON.parse(localStorage.getItem("currentUser"));
secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
coordinator:boolean;
secretary:boolean;
user(){
if(this.secretaryUser.Permission==3)
this.coordinator=true;
else{
this.secretary=true;
}
}

// user(){
//   if(this.secretaryUser.Permission==3)
//   this.coordinator=true;
//   else{
//   this.secretary=true;
//   }
//   }
//   secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));

  constructor( private teacherService:TeacherService,public dialog:MatDialog,private _snackBar: MatSnackBar, private zone: NgZone,) {
   
   }

  ngOnInit() {
    this.getTeachers();
    this.user();
  }
  showPrecentInput(){
    this.precent=true;
  }

 // postUser(user u) {
  //   this.httpClient.post('${this.usersUri}/${id}')
  //   .subscribe
  // }
//   deleteUser() {
//     this.httpClient.delete('${this.usersUri}/${id}')
//     .subscribe((user:any)=>this.user=user);
//   }
techerGroups:[]=[]
//unique:[];
public getTeachers() {
  this.teacherService.getTeachers().subscribe(teachers => {
    this.teachers  = teachers ;
    // this.teachers=
    // let unique = [...new Set(this.teachers.map(item => item.TeacherTz))];        // for(var i =0; i<teachers.length;i++){
      
    // //   this.techerGroups.push(this.teachers[i])
    // // }
    // for(var i=0; i<this.teachers.length;i++){
    //   debugger
    //   if(unique.includes(teachers[i].TeacherTz)==true){
    //     this.teachers.push(teachers[i])
    //     unique.filter(tz=>tz==teachers[i].TeacherTz)
    //   }
    // }
    // console.log("techerGroups:"+this.techerGroups)
    console.log(this.teachers);
  }, (err) => {
    console.log(err);
   });
}

putPositionPrecent()
{
this.teacherService.putPositionPrecent(this.teacherUser.TeacherTz,this.teacher).subscribe(
state => {console.log(state);
},
(error: any)=> {
    this.message.error = error.error.message;
});
}
deleteTeacher( teacherId:number,index:number) {
  var x=confirm("המורה "+this.teachers[index].TeacherFirstName+" "+this.teachers[index].TeacherLastName+ " תמחק מהמערכת");
  if(x){
    this.teacherService.deleteTeacher(teacherId).subscribe(state => {
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
openDialog(index:number) {
  if(index==-1)
  {
  this.dialog.open(UpdateTeacherComponent,{
    width:'400px',
    height: '600px',
    
   data: {
           currentTeacher:new Teacher
   }
 });
}
else{
  this.dialog.open(UpdateTeacherComponent,{
     width:'400px',
     height: '600px',
     
    data: {
            currentTeacher: this.teachers[index]
    }
  });
}
}
displayedColumns: string[] = ['update','delete','TeacherFirstName', 'TeacherLastName','TeacherTz','IsActive','TeachingId','PhoneNumber','Adress','Email','PositionHours','Permission',' TeacherGroup','TeacherStandard'];
  dataSource = new MatTableDataSource<Teacher>(this.teachers);
  @ViewChild(MatPaginator, {static: false})  paginator: MatPaginator ;
//  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}





