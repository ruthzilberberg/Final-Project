import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Teacher } from '../models/teacher';
import { UpdateTeacherComponent } from '../update-teacher/update-teacher.component';

@Component({
  selector: 'app-navigator-teacher',
  templateUrl: './navigator-teacher.component.html',
  styleUrls: ['./navigator-teacher.component.scss']
})
export class NavigatorTeacherComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
 
 
}
