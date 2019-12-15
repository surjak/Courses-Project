import { Component, OnInit } from "@angular/core";
import { ICourse } from "src/app/models/icourse.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "src/app/course-list/course.service";
import { map } from "rxjs/operators";

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
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
    });
  }
  rateCourse(id: number) {
    this.rate = id;
  }
}
