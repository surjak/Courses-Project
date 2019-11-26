import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseComponent } from "./course-list/course/course.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    CourseDetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
