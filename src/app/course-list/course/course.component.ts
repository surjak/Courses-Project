import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "src/app/user.service";
import { AuthService } from "src/app/auth/auth.service";

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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }
  joinCourse() {
    this.userService.joinCourse(this.id).subscribe(
      res => {},
      err => {
        alert("Yu are already in this course");
      }
    );
  }
}
