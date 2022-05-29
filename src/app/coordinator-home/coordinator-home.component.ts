import { Component, OnInit } from '@angular/core';
import { Secretary } from '../models/secretary';

@Component({
  selector: 'app-coordinator-home',
  templateUrl: './coordinator-home.component.html',
  styleUrls: ['./coordinator-home.component.scss']
})
export class CoordinatorHomeComponent implements OnInit {
  secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
  constructor() { }

  ngOnInit() {
  }

}
