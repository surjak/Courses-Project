import { Component, OnInit } from "@angular/core";
import { CourseService } from "src/app/course-list/course.service";
import { ICourse } from "src/app/models/icourse.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-remove-course",
  templateUrl: "./remove-course.component.html",
  styleUrls: ["./remove-course.component.css"]
})
export class RemoveCourseComponent implements OnInit {
  courses: ICourse[];
  subscription: Subscription;
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.subscription = this.courseService.coursesChanged.subscribe(courses => {
      this.courses = courses;
    });
    this.courses = this.courseService.getCourses();
  }
  onRemoveCourse(id) {
    console.log(id);

    this.courseService.removeCourse(id);
  }
}
