import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { Teacher } from '../models/teacher';
import { TeacherService } from '../services/teacher.service';
import {MatDialogRef, MatSnackBar, MAT_DIALOG_DATA , MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  ErrorStateMatcher,
  MatSnackBarConfig,} from '@angular/material';
import { TeacherComponent } from '../teacher/teacher.component';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
// import {TeacherComponent} from './compOne.component';
//import { CompOneComponent } from './compOne.component';
@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.scss'],
  // template:'<app-teacher #one></app-teacher>'
})

export class UpdateTeacherComponent implements OnInit,ErrorStateMatcher {
 
  constructor(private teacherService:TeacherService, @Inject(MAT_DIALOG_DATA) public data: Teacher,public dialogRef: MatDialogRef<UpdateTeacherComponent>
  ,private _snackBar: MatSnackBar, private zone: NgZone,) { 
   
  }
  public  currentTeacher: Teacher = new Teacher();
 public teacherId: number;
 teachingId:boolean=false;
 
  ngOnInit() {
    console.log(this.data)
    // let newTeacherComp=new TeacherComponent();
  }
  change(){
    this.teachingId=true;
  }
  saveTeacher(){
    debugger;
     if (this.teachingId == true) {
      this.updateTeachingId();
      this.teachingId = false;
    }
    else if(this.data.currentTeacher.TeacherId==null)
   {
    this.addTeacher();
   }
    else
     {
     this.updateTeacher();
   }
   this.dialogRef.close();
   
   
   }
  addTeacher() {
    
    this.teacherService.addTeacher(this.data.currentTeacher).subscribe(state => {
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
  updateTeacher() {
    this.teacherService.updateTeacher(this.data.currentTeacher).subscribe(state => {
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
  
 
  updateTeachingId(){
    this.teacherService.updateTeachingId(this.data.currentTeacher).subscribe(state => {
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
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  // matcher = new MyErrorStateMatcher();
    
}