import { Component, OnInit } from "@angular/core";
import { ICourse } from "src/app/models/icourse.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "src/app/course-list/course.service";
import { map } from "rxjs/operators";
import { UserService } from "src/app/user.service";
import { OnecourseService } from "../onecourse.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { IUser } from "src/app/models/iuser.model";

@Component({
  selector: "app-one-course",
  templateUrl: "./one-course.component.html",
  styleUrls: ["./one-course.component.css"]
})
export class OneCourseComponent implements OnInit {
  course: ICourse;
  rate: number;
  commentForm: FormGroup;
  user: IUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private userService: UserService,
    private oneCourseService: OnecourseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.course = this.oneCourseService.course;
    this.rate = this.oneCourseService.rate;
    this.authService.user.subscribe(user => (this.user = user));
    let comment: String;
    this.commentForm = new FormGroup({
      comment: new FormControl(comment, Validators.required)
    });
  }
  rateCourse(rate: number) {
    this.oneCourseService.rateCourse(rate).subscribe(res => {
      this.course = this.oneCourseService.course;
      this.rate = this.oneCourseService.rate;
    });
  }

  onSubmit() {
    let comment: string = this.commentForm.value["comment"];
    this.course.comments.push({ userId: this.user.email, comment: comment });
    console.log(comment);
    this.commentForm.reset();
  }
}
