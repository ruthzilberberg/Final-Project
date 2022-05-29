import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService,public dialog:MatDialog) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.currentUser()) {
            return true;
        }
        else {
            // this.router.navigate(['/login']); 
            this.dialog.open(LoginComponent);
                   alert("הגישה חסומה, אין לך הרשאה לעמוד זה, התחברי או חזרי לדף הבית")
          
               return false;
        }
    }
    
}
