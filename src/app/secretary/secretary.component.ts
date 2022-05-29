import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSnackBarConfig, MatTableDataSource } from '@angular/material';
import { Secretary } from '../models/secretary';
 
import { Student } from '../models/student';
import { SecretaryInsertUpdateComponent } from '../secretary-insert-update/secretary-insert-update.component';
import { SecretaryService } from '../services/secretary.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.scss'],
 
})
export class SecretaryComponent implements OnInit {

   constructor( private studentService: StudentService,private dialog:MatDialog,private secretaryService:SecretaryService
    ,private _snackBar: MatSnackBar, private zone: NgZone,) { }
 secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
 public secretaries:Secretary[]=[];
coordinator:boolean;
secretary:boolean;
user(){
if(this.secretaryUser.Permission==3)
this.coordinator=true;
else{
this.secretary=true;
}
}
  ngOnInit() {
   this.getSecretaries();
this.user();
  }
  // public user: Secretary = new Secretary("","", "",true);
  // public users: Secretary[] = [];
 

 


  getSecretaries() {
 
  this.secretaryService.getSecretaries().subscribe(secretaries => {
    this.secretaries =secretaries;
  // })

  // this.studentService.splitingToGroups().subscribe(students=>{
  //   console.log(students)
  },err=>console.log(err))
  }
 
  deleteSecretary(secretaryId:number,index:number) {
    var x=confirm("המזכירה "+this.secretaries[index].SecretaryFirstName+" "+this.secretaries[index].SecretaryLastName+ " תמחק מהמערכת");
    if(x){
      this.secretaryService.deleteSecretary(secretaryId).subscribe(state => {
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
    debugger;
    if(index==-1)
    {
    this.dialog.open(SecretaryInsertUpdateComponent,{
      width:'400px',
      height: '600px',
      
     data: {
             currentSecretary:new Secretary
     }
   });
  }
  
  else{
   
    this.dialog.open(SecretaryInsertUpdateComponent,{
       width:'400px',
       height: '600px',
       
      data: {
              currentSecretary: this.secretaries[index]
      }
    });
  }
  }
  
  displayedColumns: string[] = ['update','delete','SecretaryFirstName', 'SecretaryLastName','SecretaryTz','IsActive','PhoneNumber','Adress','Email','Permission'];
    dataSource = new MatTableDataSource<Secretary>(this. secretaries);
    @ViewChild(MatPaginator, {static: false})  paginator: MatPaginator ;
  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
  }
  

