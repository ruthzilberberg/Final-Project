import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { SecretaryService} from '../services/secretary.service';
// import { TeacherService} from '../services/teacher.service';
import { UserService } from '../services/user.service';

// import { Secretary } from '../modules/secretary';
// import{Teacher}from '../modules/teacher';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SecretaryService } from '../services/secretary.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Secretary } from '../models/secretary';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //   template: `
  //   <app-auth-service [childMessage]="parentMessage"></app-auth-service>
  // `,
  styleUrls: ['./login.component.scss'],
  //   template: `
  //   <div class="app">
  //     <login></login>
  //   </div>
  // `
})
export class LoginComponent implements OnInit {
  name: string;
  // password: string;
  permission: any;
  @Input('passwordTrue')
  message = { error: '' };
  p: string;
  tz: any;
  hide = true;
  @Input() childMessage: boolean;
  isPassword: boolean;
  // @Input()passwordTrue:any;
  // @Output() p=new EventEmitter<any>();

  private keyToken = 'token';
  // IsPasswordTrue:false;
  // passwordTrue:false;
  passwordd: any;
  changePassword = false;
  user: any = JSON.parse(localStorage.getItem("currentUser"));
  secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentSecretary"));
  teacherUser: Teacher= JSON.parse(localStorage.getItem("currentTeacher"));
  // constructor( private secretaryService: SecretaryService,private router: Router,private teacherService: TeacherService ) { }
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private authService: AuthService,private _snackBar: MatSnackBar,
     private router: Router, private userService: UserService, private secretaryService: SecretaryService) { }

  ngOnInit() {
    // this.p=false;

  }
  sendPassword() {
    // this.secretaryService.getSendPassword().subscribe(email => {
    //   this.passwordd = email;
    // }, (err) => {
    //   console.log(err);
    // });
    this._snackBar.open('', 'הסיסמא נשלחה לכתובת המייל שלך', {
      duration: 1000,
     });
  }

  login(tz: string) {
    this
      .userService.getUser(tz).subscribe(
        User => {
          console.log(User);
          this.permission = User.Permission;
       
          if (this.permission != null) {
            if (this.permission == 1) {
              localStorage.setItem(this.authService.key, JSON.stringify(User));
              // if (localStorage.getItem('IsCoordinator') != null)
              //   localStorage.removeItem('IsCoordinator')
              this.router.navigate(['/teacherHome'])
              this.dialogRef.close()
            }
            else if (this.permission == 2) 
            {
              this.isPassword = true;
              if (User.Password==this.p) {
                localStorage.setItem(this.authService.key, JSON.stringify(User));
                // if (localStorage.getItem('IsCoordinator') != null)
                //   localStorage.removeItem('IsCoordinator')
                this.router.navigate(['/secretaryHome'])
                this.dialogRef.close()
              }
              if(this.p!=null)
               if (User.Password!=this.p)
               this._snackBar.open('', 'סיסמא שגויה', {
                duration: 1000,
               });
            }
            else {
           
              this.isPassword = true;
              if (User.Password==this.p) {
                localStorage.setItem(this.authService.key, JSON.stringify(User));
                // localStorage.setItem('IsCoordinator', JSON.stringify(true));
                this.router.navigate(['/coordinatorHome'])
                this.dialogRef.close()
              }
              if(this.p!=null)
              if (User.Password!=this.p)
              this._snackBar.open('', 'סיסמא שגויה', {
                duration: 1000,
              });
            }
            // console.log(User);
          }
        },

        (error: any) => {
          // console.log(error.message);



          this.message.error = error.error.message;
        }
      );
  }

  //   login2(name: string){
  //       this
  //         .httpClient
  //         .get<string>(`${environment.apiUrl}/users`,{params:{name}})
  //         .subscribe((token: string) => {
  //             localStorage.setItem(this.keyToken, token);
  //             this.router.navigate(['/']);
  //         },
  //         (error: any)=> {
  //             this.message.error = error.error.message;
  //         });
  //  }



  //   logout2() {
  //     localStorage.removeItem(this.keyToken);
  //     this.router.navigate(['/login']);
  // }



  //   token() {
  //     return localStorage.getItem(this.keyToken);
  // }

}

  // name:string;
  // message:string;
//  teacher:Teacher[];
// secretary: Secretary[];


