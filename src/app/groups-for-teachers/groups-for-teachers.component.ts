import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../models/teacher';
import { MatDialog, MatPaginator, MatSnackBar, MatSnackBarConfig, MatSort, MatTableDataSource } from '@angular/material';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { Secretary } from '../models/secretary';
import { StudentGroupComponent } from '../student-group/student-group.component';
@Component({
  selector: 'app-groups-for-teachers',
  templateUrl: './groups-for-teachers.component.html',
  styleUrls: ['./groups-for-teachers.component.scss']
})
export class GroupsForTeachersComponent implements OnInit {
  // public course: Course = new Course();
  public groups: any[] = [];
  public groups2: any[] = [];
  teachers: Teacher[] = [];
  teachers2: Teacher[] = [];
  students: Student[] = [];
  student2: Student[] = [];
  fill: boolean = false;
  t:boolean=false;
  secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
  constructor(private teacherService: TeacherService, private studentService: StudentService, private dialog: MatDialog
    ,private _snackBar: MatSnackBar, private zone: NgZone) { }

  ngOnInit() {
    this.getTeachers()
    this.getGroups()
    this.getStudents()
  }
  getGroups() {
    this.teacherService.getGroupsForTeacher().subscribe(groupTeacher => {
      this.groups2 = groupTeacher;
      console.log(this.groups2);
    }, (err) => {
      console.log(err);
    });
  }
  public getTeachers() {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers2 = teachers;
      console.log(this.teachers);
    }, (err) => {
      console.log(err);
    });
  }
  // save(){
  //   this.fill=true;
  // }
  getStudents() {
    this.studentService.getStudents().subscribe(students => {
      this.student2 = students;
      //  this.students=this.student2;
      console.log(this.student2);

    }, (err) => {
      console.log(err);
    });
  }
  serch(teachingId: number) {
    this.teachers = this.teachers2;
    this.groups = this.groups2;

    this.teachers = this.teachers.filter(t => t.TeachingId == teachingId);
    this.groups = this.groups.filter(g => g.TeachingId == teachingId);
this.t=false;
    //  this.getGroups();
  }



  serch2(groupNumber: number) {
    this.t=true;
    console.log(this.student2);
    this.students = this.student2;
    console.log(this.students);
    this.students = this.students.filter(s => s.GroupNumber == groupNumber);
    console.log(this.students);

  }
  public calculateStandard(teacher: Teacher) {
    this.teacherService.calculateStandard(teacher).subscribe(state => {
      const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.zone.run(() => {
      this._snackBar.open(state, 'x', config);
      this.teacherService.getTeachers().subscribe(teachers => {
        this.teachers2 = teachers;
        this.teachers = this.teachers.filter(t => t.TeachingId ==teacher.TeachingId);
        console.log(this.teachers);
      }, (err) => {
        console.log(err);
      });
      
    });
    }, (err) => {
      console.log(err);
    });
  }
  openDialog(index: number) {

    {
      this.dialog.open(StudentGroupComponent, {
        width: '400px',
        height: '600px',

        data: {
          currentStudent: this.students.filter(s=>s.GroupNumber==index)
        }
      });
    }
  }
  @ViewChild('hBSort', { static: false }) hBSort: MatSort;
  @ViewChild('sBSort', { static: false }) sBSort: MatSort;
  // this.hBSource = new HBDataSource(this.hBDatabase, this.hBPaginator, 
  //   this.hBSort);
  //   this.sBSource = new SBDataSource(this.sBDatabase, this.sBPaginator, 
  //   this.sBSort);

  // this.hBSource = new HBDataSource(this.hBDatabase, this.hBPaginator, 
  // this.hBSort);
  // this.sBSource = new SBDataSource(this.sBDatabase, this.sBPaginator, 
  // this.sBSort);
  // this.groups2 = new MatTableDataSource(this.groups2);
  // this.groups2 = new MatTableDataSource(this.groups2);
  displayedColumns: string[] = ['TeacherFirstName', 'TeacherLastName', 'PositionHours', 'TeacherGroup',' TeacherStandard'];
  dataSource = new MatTableDataSource<Teacher>(this.teachers);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // dataSource1 = new MatTableDataSource<any>(this.groups);
  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns1: string[] = ['Show', 'TeachingId', 'GroupNumber', 'NumOfStudent', 'Grade', 'StandardOfGroup'];
  displayedColumns2: string[] = ['StudentFirstName', 'StudentLastName','StudentTz','Class'];
  // dataSource = new MatTableDataSource<any>(this.groups);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
