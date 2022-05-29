import { Component, NgZone, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Teacher } from '../models/teacher';
import { TeachingAvailability } from '../models/teachingAvailability';
import { TeachingAvailabilityService } from '../services/teaching-availability.service';

@Component({
  selector: 'app-teaching-availability',
  templateUrl: './teaching-availability.component.html',
  styleUrls: ['./teaching-availability.component.scss']
})
export class TeachingAvailabilityComponent implements OnInit {
  teacherUser: Teacher = JSON.parse(localStorage.getItem("currentUser"));
  public availability:TeachingAvailability = new TeachingAvailability();
  constructor(private availabiltyService:TeachingAvailabilityService,private _snackBar: MatSnackBar, private zone: NgZone,) { }

  ngOnInit() {
    // console.log(this.teacherUser.TeacherId)
    // console.log(this.teacherUser)
    this.getAvailablityById();
  }
  // getTeachingAvailablity() {
  //   this.availabiltyService.getAvailablity().subscribe(availability => {
  //     this.courses = courses;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
  getAvailablityById() {
    this.availabiltyService.getAvailablityById(this.teacherUser.TeacherId).subscribe(state =>{
     this.availability = state; 
     console.log(this.availability)
     
     }, (err) => {
      console.log(err);
    });
    }

    updateAvailabilty() {
      this.availability.TeacherId=this.teacherUser.TeacherId;
           this.availabiltyService.updateAvailablity(this.availability).subscribe(state => {
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
