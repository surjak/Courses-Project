import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../course.service";
import { ICourse } from "src/app/models/icourse.model";
import { map, switchMap } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { IUser } from "src/app/models/iuser.model";

@Component({
  selector: "app-course-details",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.css"]
})
export class CourseDetailsComponent implements OnInit {
  course: ICourse;
  rate: number;
  commentForm: FormGroup;
  user: IUser;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
      console.log(this.course);
    });
    this.authService.user.subscribe(user => (this.user = user));
    let comment: String;
    this.commentForm = new FormGroup({
      comment: new FormControl(comment, Validators.required)
    });
  }

  // onSubmit() {
  //   let comment: string = this.commentForm.value["comment"];
  //   this.course.comments.push({ email: this.user.email, comment: comment });
  //   console.log(comment);
  //   this.commentForm.reset();
  // }
}
