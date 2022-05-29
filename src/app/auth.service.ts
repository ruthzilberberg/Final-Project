import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { environment } from 'src/environments/environment';
import { JsonPipe } from '@angular/common';
import { error, logging } from 'protractor';
import { LoginComponent } from './login/login.component';

// import { Component } from '@angular/core';
// @Component({
//    selector: 'auth-service',
//    template: `
//   <app-login 
//   [passwordTrue=]="false">
//   </app-login>
// `,
// })
// @Input() childMessage: boolean;
// @Component({
//   selector: 'app-auth-service',

// })

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  passwordTrue: boolean;
 public key = 'currentUser';
 public secretary = 'currentSecretary';
  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) { }
  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(['/home']);
  }
  currentUser() {
    return localStorage.getItem(this.key);
  }
  currentSecretary() {
    return localStorage.getItem(this.secretary);
  }
}
  
 
