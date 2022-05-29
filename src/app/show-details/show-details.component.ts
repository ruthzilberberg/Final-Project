import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
public students:Student[]=[];
public student2:Student[]=[];
teachers:Teacher[]=[];
teacherUser: Teacher = JSON.parse(localStorage.getItem("currentUser"));
public teacher: Teacher= new Teacher();
  constructor(private studentService:StudentService,private teacherService:TeacherService) { }

  ngOnInit() {
    // this.getStudents();
    this.getTeacherById();
    // this.getTeachers();
    // this.serch();
  }
  // serch(){
   
  //   this.students=this.student2;
    
  //  this.students= this.students.filter(s=>s.GroupNumber==this.teacherUser.TeacherGroup)
  // }
  // serch(){
    
  //   this.students=this.student2;
    
  //   this.students= this.students.filter(s=>s.GroupNumber==this.teacherUser.TeacherGroup)


  // }
  // teacherGroup:any=[]
  // getStudents() {

  //   this.studentService.getStudents().subscribe(students => {
  //     this.student2  = students ;
  //    this.students=this.student2;
   
  //   // this.getTeachers();
  //   this.teacherService.getTeachers().subscribe(teachers => {
     
  //     this.teachers  = teachers.filter(teacher=> teacher.TeacherTz==this.teacherUser.TeacherTz) ;
      
  //     this.teacherGroup=this.teachers.map(teacher=>teacher.TeacherGroup);
  //       this.students  = students ;
  //      this.students= this.students.filter(s=>this.teacherGroup.includes(s.GroupNumber))
        
  //     console.log(this.teachers);
  //   }, (err) => {
  //     console.log(err);
  //    });
  // // debugger;
  // //   this.teacherGroup=this.teachers.map(teacher=>teacher.TeacherGroup);
  // //     this.students  = students ;
  // //    this.students= this.students.filter(s=>this.teacherGroup.includes(s.GroupNumber))
      
  //     console.log(this.students);
    
  //   }, (err) => {
  //     console.log(err);
  //    });
   
  // }
  // public getStudents() {
    
  // }

  // public getTeachers() {
  //   this.teacherService.getTeachers().subscribe(teachers => {
  //     debugger;
  //     this.teachers  = teachers.filter(teacher=> teacher.TeacherTz==this.teacherUser.TeacherTz) ;
    
  //     console.log(this.teachers);
  //   }, (err) => {
  //     console.log(err);
  //    });
  // }
  getTeacherById() {
    this.teacherService.getTeacherById(this.teacherUser.TeacherTz).subscribe(
      state => this.teacher = state),
    this.studentService.getStudents().subscribe(students => {
      this.student2 =students;
      this.students=this.student2;
      this.students=this.students.filter(s => s.GroupNumber == this.teacherUser.TeacherGroup);
     
    }, (err) => {
          console.log(err);
         });
  }
  displayedColumns: string[] = ['StudentFirstName', 'StudentLastName','StudentTz','Grade','Class','IsIncludingTeaching','IsEngaged','IsActive','StudentStandard','GroupNumber'];
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
