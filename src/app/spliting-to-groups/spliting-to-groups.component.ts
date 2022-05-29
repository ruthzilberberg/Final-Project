import { Component, OnInit } from '@angular/core';
import { Secretary } from '../models/secretary';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-spliting-to-groups',
  templateUrl: './spliting-to-groups.component.html',
  styleUrls: ['./spliting-to-groups.component.scss']
})
export class SplitingToGroupsComponent implements OnInit {
students:Student[]=[];
secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }
  public getGroups() {
    this.studentService.splitingToGroups().subscribe(students => {
      this.students =students;
      console.log(this.students);
    }, (err) => {
      console.log(err);
     });
  }
  
}