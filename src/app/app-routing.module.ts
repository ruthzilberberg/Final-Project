import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{TeacherComponent}from './teacher/teacher.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { LoginComponent } from './login/login.component';
import {AboutComponent } from './about/about.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { AuthGuard } from './authGuard';
import { CourseComponent } from './course/course.component';
import { GroupsForTeachersComponent } from './groups-for-teachers/groups-for-teachers.component';

import { DashboardComponent } from './dashboard/dashboard.component'
import { StudentComponent } from './student/student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { NavigatorTeacherComponent } from './navigator-teacher/navigator-teacher.component';
import { NavigatorSecretaryComponent } from './navigator-secretary/navigator-secretary.component';
import { SplitingToGroupsComponent } from './spliting-to-groups/spliting-to-groups.component';
import { StudentInsertUpdateComponent } from './student-insert-update/student-insert-update.component';
import { SecretaryInsertUpdateComponent } from './secretary-insert-update/secretary-insert-update.component';
import { SecretaryHomeComponent } from './secretary-home/secretary-home.component';
import { CoordinatorHomeComponent } from './coordinator-home/coordinator-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { FileToDataBaseComponent } from './file-to-data-base/file-to-data-base.component';
import { TeachingAvailabilityComponent } from './teaching-availability/teaching-availability.component';
import { EngagedStudentComponent } from './engaged-student/engaged-student.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { StudentGroupComponent } from './student-group/student-group.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'teacher',component:TeacherComponent,canActivate:[AuthGuard]},
  {path:'secretary',component:SecretaryComponent,canActivate:[AuthGuard]},
  {path:'coordinator',component:CoordinatorComponent,canActivate:[AuthGuard]},
  {path:'course',component:CourseComponent,canActivate:[AuthGuard]},
  {path:'groupsForTeachers',component:GroupsForTeachersComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,},
  {path:'student',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'updateTeacher',component:UpdateTeacherComponent,canActivate:[AuthGuard]},
  {path:'navigatorTeacher',component:NavigatorTeacherComponent,canActivate:[AuthGuard]},
  {path:'navigatorSecretary',component:NavigatorSecretaryComponent,canActivate:[AuthGuard]},
  {path:'splitingToGroups',component:SplitingToGroupsComponent,canActivate:[AuthGuard]},
  {path:'studentInsertUpdate',component:StudentInsertUpdateComponent,canActivate:[AuthGuard]},
  {path:'secretaryInsertUpdate',component:SecretaryInsertUpdateComponent,canActivate:[AuthGuard]},
  {path:'secretaryHome',component:SecretaryHomeComponent,canActivate:[AuthGuard]},
  {path:'coordinatorHome',component:CoordinatorHomeComponent,canActivate:[AuthGuard]},
  {path:'teacherHome',component:TeacherHomeComponent,canActivate:[AuthGuard]},
  {path:'updateCourse',component:UpdateCourseComponent,canActivate:[AuthGuard]},
  {path:'fileToData',component:FileToDataBaseComponent,canActivate:[AuthGuard]},
  {path:'teachingAvailability',component:TeachingAvailabilityComponent,canActivate:[AuthGuard]},
  {path:'engagedStudent',component:EngagedStudentComponent,canActivate:[AuthGuard]},
  {path:'showDetails',component:ShowDetailsComponent,canActivate:[AuthGuard]},
  {path:'updateDetails',component:UpdateDetailsComponent,canActivate:[AuthGuard]},
  {path:'studentGroup',component:StudentGroupComponent,canActivate:[AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
