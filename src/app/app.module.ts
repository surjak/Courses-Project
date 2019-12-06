import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseComponent } from "./course-list/course/course.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CourseDetailsComponent } from "./course-list/course-details/course-details.component";
import { FilterPipe } from "./shared/filter.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AddCourseComponent } from "./admin-panel/add-course/add-course.component";
import { EditCourseComponent } from "./admin-panel/edit-course/edit-course.component";
import { RemoveCourseComponent } from "./admin-panel/remove-course/remove-course.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component";
import { TeacherListComponent } from "./teacher-list/teacher-list.component";
import { TeacherComponent } from "./teacher-list/teacher/teacher.component";
import { EditCourseItemComponent } from "./admin-panel/edit-course/edit-course-item/edit-course-item.component";
import { RemoveTeacherComponent } from './remove-teacher/remove-teacher.component';
import { TeacherDetailsComponent } from './teacher-list/teacher-details/teacher-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    CourseDetailsComponent,
    FilterPipe,
    AdminPanelComponent,
    AddCourseComponent,
    EditCourseComponent,
    RemoveCourseComponent,
    AddTeacherComponent,
    TeacherListComponent,
    TeacherComponent,
    EditCourseItemComponent,
    RemoveTeacherComponent,
    TeacherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
