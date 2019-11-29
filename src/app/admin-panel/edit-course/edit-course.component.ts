import { Component, OnInit } from "@angular/core";
import { ICourse } from "src/app/models/icourse.model";
import { CourseService } from "src/app/course-list/course.service";

@Component({
  selector: "app-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.css"]
})
export class EditCourseComponent implements OnInit {
  courses: ICourse[];
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
}
