import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../course.service";
import { ICourse } from "src/app/models/icourse.model";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-course-details",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.css"]
})
export class CourseDetailsComponent implements OnInit {
  course: ICourse;

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
}
