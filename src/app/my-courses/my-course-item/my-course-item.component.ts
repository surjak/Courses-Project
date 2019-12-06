import { Component, OnInit, Input } from "@angular/core";
import { ICourse } from "src/app/models/icourse.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-course-item",
  templateUrl: "./my-course-item.component.html",
  styleUrls: ["./my-course-item.component.css"]
})
export class MyCourseItemComponent implements OnInit {
  @Input() course: ICourse;
  constructor(private router: Router) {}

  ngOnInit() {}
  navigate() {
    this.router.navigate(["courses", this.course._id]);
  }
}
