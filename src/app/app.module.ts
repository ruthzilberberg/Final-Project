import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule}from '@angular/common/http';
import { TeacherComponent } from './teacher/teacher.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { LoginComponent } from './login/login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatSelectModule} from '@angular/material/select';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { GroupsForTeachersComponent } from './groups-for-teachers/groups-for-teachers.component';

import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { NavigatorTeacherComponent } from './navigator-teacher/navigator-teacher.component';
import { NavigatorSecretaryComponent } from './navigator-secretary/navigator-secretary.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

import { SplitingToGroupsComponent } from './spliting-to-groups/spliting-to-groups.component';
import { StudentInsertUpdateComponent } from './student-insert-update/student-insert-update.component';
import { SecretaryInsertUpdateComponent } from './secretary-insert-update/secretary-insert-update.component';
import { SecretaryHomeComponent } from './secretary-home/secretary-home.component';
import { CoordinatorHomeComponent } from './coordinator-home/coordinator-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FileToDataBaseComponent } from './file-to-data-base/file-to-data-base.component';
import { TeachingAvailabilityComponent } from './teaching-availability/teaching-availability.component';
import { TeachersGroupsComponent } from './teachers-groups/teachers-groups.component';
import { EngagedStudentComponent } from './engaged-student/engaged-student.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { StudentGroupComponent } from './student-group/student-group.component';


// import { AgGridModule } from "ag-grid-angular";
// import {Grid} from 'ag-grid-community';
// import * as CanvasJS from '../assets/canvasjs.min';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    SecretaryComponent,
    LoginComponent,
    CoordinatorComponent,
    AboutComponent,
    NavBarComponent,
    CourseComponent,
    HeaderComponent,
    GroupsForTeachersComponent,
  
    StudentComponent,
    DashboardComponent,
    UpdateTeacherComponent,
    NavigatorTeacherComponent,
    NavigatorSecretaryComponent,
    UpdateCourseComponent,
   
    SplitingToGroupsComponent,
    StudentInsertUpdateComponent,
    SecretaryInsertUpdateComponent,
    SecretaryHomeComponent,
    CoordinatorHomeComponent,
    TeacherHomeComponent,
    FileToDataBaseComponent,
    TeachingAvailabilityComponent,
    TeachersGroupsComponent,
    EngagedStudentComponent,
    ShowDetailsComponent,
    UpdateDetailsComponent,
    StudentGroupComponent,
    
  ],
  // @NgModule({
  //   imports: [
  //       BrowserModule,
        
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    // AgGridModule.withComponents(
    //     [CourseComponent
    //     ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule ,
    MatCardModule ,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule
   

    // CanvasJS
    // Grid,
    // AgGridModule
  ],
  providers: [
    //   {  
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthInterceptor,
    //     multi: true
    //   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
