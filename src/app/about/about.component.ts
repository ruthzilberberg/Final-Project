import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // currentUser: any = JSON.parse(localStorage.getItem("currentUser"));

  @ViewChild('ref', { static: false }) ref: ElementRef


  constructor() { }


  ngOnInit() {
  }

  // showDetalis() {
  //   this.ref.nativeElement.innerHTML = "האתר מחשב תקן בקליק"

  // }
}
