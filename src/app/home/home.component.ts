import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog){}

  ngOnInit() {
   
  }
  openDialog() {
    this.dialog.open(LoginComponent);
  }
 
  // routeAbout(){
  //   this.router.navigate(['/about']);

  // }
}