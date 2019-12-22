import { Component, OnInit } from "@angular/core";
import { CourseService } from "./course.service";
import { ICourse } from "../models/icourse.model";
import { Options } from "ng5-slider";
@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: ICourse[];
  value: number = 0;
  highValue: number = 15;
  options: Options = {
    floor: 0,
    ceil: 15
  };
  value2: number = 0;
  highValue2: number = 10;
  options2: Options = {
    floor: 0,
    ceil: 10
  };
  value3: number = 0;
  highValue3: number = 10;
  options3: Options = {
    floor: 0,
    ceil: 10
  };
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }
}
