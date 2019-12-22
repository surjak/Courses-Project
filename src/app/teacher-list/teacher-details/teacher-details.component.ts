import { Component, OnInit } from "@angular/core";
import { TeachersService } from "../teachers.service";
import { ActivatedRoute } from "@angular/router";
import { ITutor } from "src/app/models/itutor.model";
import { map } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "src/app/user.service";
import { IUser } from "src/app/models/iuser.model";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-teacher-details",
  templateUrl: "./teacher-details.component.html",
  styleUrls: ["./teacher-details.component.css"]
})
export class TeacherDetailsComponent implements OnInit {
  commentForm: FormGroup;
  teacher: ITutor;
  type: "Learning Skills";
  types = ["Learning Skills", "Soft Skills", "Personality"];
  user: IUser;
  constructor(
    private teacherService: TeachersService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.teacher = this.teacherService.getTeachersById([id])[0];
    });
    let comment: String;
    this.commentForm = new FormGroup({
      comment: new FormControl(comment, Validators.required)
    });
    this.authService.user.subscribe(user => (this.user = user));
    this.type = "Learning Skills";
  }

  onSubmit() {
    let comment: string = this.commentForm.value["comment"];
    this.teacherService
      .addComment(this.teacher._id, comment, this.type)
      .subscribe(
        res => {
          if (this.type == "Learning Skills") {
            this.teacher.learningSkills.push({
              email: this.user.email,
              comment: comment
            });
          } else if (this.type == "Soft Skills") {
            this.teacher.softSkills.push({
              email: this.user.email,
              comment: comment
            });
          } else {
            this.teacher.personalSkills.push({
              email: this.user.email,
              comment: comment
            });
          }
          this.commentForm.reset();
          console.log(this.teacher);
        },
        err => console.log(err)
      );
  }
  changeType(e) {
    this.type = e.target.value;
    console.log(this.type);
  }
}
