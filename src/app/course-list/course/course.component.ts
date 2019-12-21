import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/user.service";
import { AuthService } from "src/app/auth/auth.service";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  @Input() id: string;
  @Input() imageUrl: string;
  @Input() name: string;
  isAuth: boolean = false;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }
  joinCourse() {
    this.userService.joinCourse(this.id).subscribe(
      res => {
        this.courseService.incrementAttendees(this.id);
      },
      err => {
        let msg = "Yu are already in this course";
        if (err.error.message) {
          msg = err.error.message;
        }
        alert(msg);
      }
    );
  }
}
