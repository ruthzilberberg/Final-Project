import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Secretary } from '../models/secretary';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-file-to-data-base',
  templateUrl: './file-to-data-base.component.html',
  styleUrls: ['./file-to-data-base.component.scss']
})
export class FileToDataBaseComponent implements OnInit {
  secretaryUser: Secretary = JSON.parse(localStorage.getItem("currentUser"));
  teaching :any;
  constructor(private studentService:StudentService,private http:HttpClient) { }
  coordinator:boolean;
  secretary:boolean;
  ngOnInit() {
    this.user();
  }
  user(){
  if(this.secretaryUser.Permission==3)
  this.coordinator=true;
  else{
  this.secretary=true;
  }
  }
 
  fileToUpload: File = null;
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
savaFileToData() {
  // const formData = new FormData();
  // formData.append('file', this.fileToUpload);
 console.log(this.fileToUpload);
  debugger;
  this.studentService.saveFileToDatabase1(this.fileToUpload).subscribe(data => {
  
  }, (err) => {
    console.log(err);
  })

}

// @ViewChild('fileInput', {static: false}) fileInput;
// // inject httpclient from @angular/common/http

// public uploadFile(): void {
//   //  if (this.fileInput.files.length === 0) {
//   //     return; // maybe needs more checking
//   //  }
 

//    const formData = new FormData();
//    console.log(formData);
//    console.log( this.fileInput);
  
//    debugger;
 
//    formData.append('file', this.fileInput.files[0]);
//   //  this.http.post('http://my-url/api/my-endpoint', formData).subscribe(teaching => {
//   //      this.teaching  = teaching ;
//   this.studentService.saveFileToDatabase(formData).subscribe(teaching => {
//      this.teaching  = teaching ;
         
//     }, (err) => {
//        console.log(err);
//       });
//      }
    // the usual

// uploadFileToActivity() {
//   this.studentService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });
// }
 
//   public getTeachingStudent()
//   {
//   this.studentService.saveFileToDatabase.subscribe(teaching => {
//    this.teaching  = teaching ;
//    console.log(this.courses);
//  }, (err) => {
//    console.log(err);
//   });
//  }
// }
}
