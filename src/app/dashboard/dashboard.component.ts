import { Component, OnInit } from '@angular/core';
import { Color } from 'ag-grid-community';
import * as Chart from 'chart.js';
import { Key } from 'protractor';
import { stringify } from 'querystring';
// import { canvasjsMin } from '../assets/canvasjs.min';
import * as CanvasJS from '../../assets/canvasjs.min.js';
import { Course } from '../models/course.js';
import { Student } from '../models/student.js';
//  import * as CanvasJS from '../assets/js/canvasjs.min';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public course: Course = new Course();
  course: string[] = [];
  public courses: Course[] = [];
  public courseId: number;
  public students: Student[] = [];
  public leftTeaching: Student[] = [];
  public studentEngaged: Student[] = [];

  constructor(public courseService: CourseService,public studentService:StudentService) {
    this.getCourses();
   
  }

  ngOnInit() {
    this.getStudentLeft();
    this.getNumEngagedTeaching();
    this.getNumLeftTeaching();
    console.log(this.students.values); 
   }
   str:string
  char() {
    console.log(this.course);
    

    let chart = new CanvasJS.Chart("chartC", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "אחוזי התלמידות שעזבו והתארסו לפי סוגי הוראה"
      },
      data: [{ 
        // color: "#AE1E37",
        type: "column",
        color:"#AE1E37",  
        dataPoints: [
                  { x: 1, y: 14.3 },
                  { x: 2, y:4.2},
                  { x: 5, y: 10.4 },
                  { x: 6, y: 6 },
                 
          
               ]
                  
                },
                
                  {
                  type: "column",
                  color: "black",
                  dataPoints: [
                  { x: 1, y: 11.5 },
                  { x: 2, y: 5.1},
                  { x: 5, y: 10.1 },
                  { x: 6, y: 4.4 },
                
                   ]
                }
                ]
              });
    
           Object.entries(this.leftTeaching).forEach(
            ([key, value]) =>{
           
            chart.options.data[0].dataPoints.push ({ y:value,x:key}),
           
            console.log(key),
            console.log(value)
            
          }
          );
         
        
          Object.entries(this.studentEngaged).forEach(
            ([key, value]) =>{
           
            chart.options.data[0].dataPoints.push ({ y:value,x:key}),
           
            console.log(key),
            console.log(value)
            i++
          }
          );
         
        

    let charts = new CanvasJS.Chart("chartContainer", {
    	theme: "light2",
    	animationEnabled: true,
    	exportEnabled: true,
    	title:{
    		text: "אחוזי תלמידות שעזבו התמחות"
    	},
    	data: [{
    		type: "pie",
        showInLegend: true,
        //color:"#AE1E37",
        
    		toolTipContent: "<b>{name}</b>: {y} (#percent%)",
    		indexLabel: "{name} - #percent%",
    		dataPoints: [

        ]
        
    	}]
    });	

var i=0;
Object.entries(this.students).forEach(
  ([key, value]) =>{
    // this.str=this.students[value];
  charts.options.data[0].dataPoints.push ({ y:value,name:key}),
 
  console.log(key),
  console.log(value)
  i++
}
);
chart.render();
    charts.render();
}


    getStudentLeft() {
      this.studentService.getStudentLeft().subscribe(students => {
        this.students  = students ;
        console.log(this.students);
      }, (err) => {
        console.log(err);
       });
    }

    getNumLeftTeaching() {
      this.studentService.getNumLeftTeaching().subscribe(students => {
        this.leftTeaching  = students ;
        console.log(this.leftTeaching );
      }, (err) => {
        console.log(err);
       });
    }

    getNumEngagedTeaching() {
      this.studentService.getNumEngagedTeaching().subscribe(students => {
        this.studentEngaged = students ;
        console.log(this.studentEngaged);
      }, (err) => {
        console.log(err);
       });
    }



  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
     
      for (var i = 0; i < courses.length; i++) {
        this.course.push(courses[i].CourseName);
      }
      this.char();
    }, (err) => {
      console.log(err);
    });
  }
  
}
// https://canvasjs.com/docs/charts/chart-options/data/color/