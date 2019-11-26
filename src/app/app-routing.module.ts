import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseDetailsComponent } from "./course-list/course-details/course-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: "courses",
    pathMatch: "full",
    component: CourseListComponent
  },
  {
    path: "courses/:id",
    component: CourseDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
