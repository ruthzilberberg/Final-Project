import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Teacher } from '../models/teacher';
import { UpdateTeacherComponent } from '../update-teacher/update-teacher.component';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {
  constructor(private dialog:MatDialog) { }
  teacherUser: Teacher = JSON.parse(localStorage.getItem("currentUser"));
  ngOnInit() {
    this.openDialog(this.teacherUser.TeacherId)
  }
  openDialog(index:number) {
    
    this.dialog.open(UpdateTeacherComponent,{
       width:'400px',
       height: '600px',
       
      data: {
              currentTeacher: this.teacherUser
      }
    });
  }
 
}
