import { Component, OnInit } from "@angular/core";
import { ICourse } from "src/app/models/icourse.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "src/app/course-list/course.service";
import { map } from "rxjs/operators";
import { UserService } from "src/app/user.service";
import { OnecourseService } from "../onecourse.service";

@Component({
  selector: "app-one-course",
  templateUrl: "./one-course.component.html",
  styleUrls: ["./one-course.component.css"]
})
export class OneCourseComponent implements OnInit {
  course: ICourse;
  rate: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private userService: UserService,
    private oneCourseService: OnecourseService
  ) {}

  ngOnInit() {
    this.course = this.oneCourseService.course;
    this.rate = this.oneCourseService.rate;
  }
  rateCourse(rate: number) {
    this.oneCourseService.rateCourse(rate).subscribe(res => {
      this.course = this.oneCourseService.course;
      this.rate = this.oneCourseService.rate;
    });
  }
}
