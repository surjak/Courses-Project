import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { ICourse } from "../models/icourse.model";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: ICourse[];
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }
}
