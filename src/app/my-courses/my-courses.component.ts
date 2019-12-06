import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { ICourse } from "../models/icourse.model";

@Component({
  selector: "app-my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.css"]
})
export class MyCoursesComponent implements OnInit {
  courses: ICourse[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.courses = this.userService.getCourses();
  }
}
