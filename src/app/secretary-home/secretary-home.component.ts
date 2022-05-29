import { Component, OnInit } from '@angular/core';
import { Secretary } from '../models/secretary';

@Component({
  selector: 'app-secretary-home',
  templateUrl: './secretary-home.component.html',
  styleUrls: ['./secretary-home.component.scss']
})
export class SecretaryHomeComponent implements OnInit {
  secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
  constructor() { }

  ngOnInit() {
  }

}
