import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TeachersService } from "../teacher-list/teachers.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-teacher",
  templateUrl: "./add-teacher.component.html",
  styleUrls: ["./add-teacher.component.css"]
})
export class AddTeacherComponent implements OnInit {
  teacherForm: FormGroup;

  constructor(private teacherService: TeachersService, private route: Router) {}

  private initForm() {
    let name: string;
    let surname: string;
    let imageUrl: string;
    let telephone: string;
    let mail: string;
    let personalPage: string;

    this.teacherForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      surname: new FormControl(surname, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
      telephone: new FormControl(telephone, Validators.required),
      mail: new FormControl(mail, Validators.required),
      personalPage: new FormControl(personalPage, Validators.required)
    });
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    let name: string = this.teacherForm.value["name"];
    let surname: string = this.teacherForm.value["surname"];
    let imageUrl: string = this.teacherForm.value["imageUrl"];
    let telephone: string = this.teacherForm.value["telephone"];
    let mail: string = this.teacherForm.value["mail"];
    let personalPage: string = this.teacherForm.value["personalPage"];
    this.teacherService.addTeacher(
      name,
      surname,
      imageUrl,
      telephone,
      mail,
      personalPage
    );

    this.route.navigate(["/teachers"]);
    // this.courseService.addCourse(
    //   name,
    //   ects,
    //   semester,
    //   formOfCourse,
    //   imageUrl,
    //   description,
    //   max,
    //   this.courseTeachers
    // );
    // this.route.navigate(["/courses"]);
  }

  onCancel() {
    console.log("cancel");
  }
}
