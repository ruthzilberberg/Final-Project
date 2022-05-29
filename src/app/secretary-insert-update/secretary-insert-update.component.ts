import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatSnackBarConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { Secretary } from '../models/secretary';
import { SecretaryService } from '../services/secretary.service';

@Component({
  selector: 'app-secretary-insert-update',
  templateUrl: './secretary-insert-update.component.html',
  styleUrls: ['./secretary-insert-update.component.scss']
})
export class SecretaryInsertUpdateComponent implements OnInit {
 
  constructor(private secretaryService:SecretaryService, @Inject(MAT_DIALOG_DATA) public data:Secretary,private router: Router,
  public dialogRef: MatDialogRef<SecretaryInsertUpdateComponent> ,private _snackBar: MatSnackBar, private zone: NgZone)  {
    console.log(this.data.currentSecretary.SecretaryFirstName);
   }
  public currentSecretary:Secretary = new Secretary();

  secretaries: Secretary[] = [];
  ngOnInit() {
    
  }
  saveSecretary() {
    if (this.data.currentSecretary.SecretaryId == null) {
      this.addSecretary();
    }
     else {
      this.updateSecretary();
    }
    this.dialogRef.close();
    this.router.navigate(['/secretary'])
  }
  addSecretary() {
      this.secretaryService.addSecretary(this.data.currentSecretary).subscribe(state => {
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

  updateSecretary() {
    this.secretaryService.updateSecretary(this.data.currentSecretary).subscribe(state => {
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
