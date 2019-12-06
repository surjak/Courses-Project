import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  @Input() id: string;
  @Input() imageUrl: string;
  @Input() name: string;
  constructor(private userService: UserService) {}

  ngOnInit() {}
  joinCourse() {
    this.userService.joinCourse(this.id);
  }
}
