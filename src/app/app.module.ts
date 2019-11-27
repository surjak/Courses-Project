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
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    NavbarComponent,
    CourseDetailsComponent,
    FilterPipe
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
