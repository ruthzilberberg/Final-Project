import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent implements OnInit {

  constructor() { }
  teacherUser: Teacher = JSON.parse(localStorage.getItem("currentUser"));
  ngOnInit() {
  }

}
