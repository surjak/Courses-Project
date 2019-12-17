import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseDetailsComponent } from "./course-list/course-details/course-details.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AddCourseComponent } from "./admin-panel/add-course/add-course.component";
import { EditCourseComponent } from "./admin-panel/edit-course/edit-course.component";
import { RemoveCourseComponent } from "./admin-panel/remove-course/remove-course.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { EditCourseItemComponent } from "./admin-panel/edit-course/edit-course-item/edit-course-item.component";
import { RemoveTeacherComponent } from "./remove-teacher/remove-teacher.component";
import { TeacherDetailsComponent } from "./teacher-list/teacher-details/teacher-details.component";
import { MyCoursesComponent } from "./my-courses/my-courses.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { OneCourseComponent } from "./my-courses/one-course/one-course.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SignupAdminComponent } from "./auth/signup-admin/signup-admin.component";
import { TeachersResolverService } from "./teacher-list/teachers-resolver.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: "courses",
    pathMatch: "full",
    component: CourseListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "courses/:id",
    component: CourseDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "teachers",
    component: TeacherListComponent,
    canActivate: [AuthGuardService],
    resolve: [TeachersResolverService]
  },
  {
    path: "teachers/:id",
    component: TeacherDetailsComponent,
    canActivate: [AuthGuardService],
    resolve: [TeachersResolverService]
  },
  {
    path: "mycourses",
    component: MyCoursesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "mycourses/:id",
    component: OneCourseComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: "admin-panel",
    component: AdminPanelComponent,
    canActivate: [AuthGuardService],
    resolve: [TeachersResolverService],
    children: [
      { path: "add-course", component: AddCourseComponent },
      {
        path: "edit-course",
        component: EditCourseComponent,
        pathMatch: "full"
      },
      {
        path: "edit-course/:id",
        component: EditCourseItemComponent
      },

      { path: "remove-course", component: RemoveCourseComponent },
      { path: "add-teacher", component: AddTeacherComponent },
      {
        path: "remove-teacher",
        component: RemoveTeacherComponent
      }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "signup-admin", component: SignupAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
