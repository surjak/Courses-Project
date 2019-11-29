import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICourse } from "src/app/models/icourse.model";
import { CourseService } from "src/app/course-list/course.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-edit-course-item",
  templateUrl: "./edit-course-item.component.html",
  styleUrls: ["./edit-course-item.component.css"]
})
export class EditCourseItemComponent implements OnInit {
  course: ICourse;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
    });
  }
}
