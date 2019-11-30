import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ITutor } from "src/app/models/itutor.model";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  constructor() {}

  private initForm() {
    let name: string;
    let ects: Number;
    let semester: Number;
    let formOfCourse: string;
    let imageUrl: string;
    let description: string;
    let max: Number;

    this.courseForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      ects: new FormControl(ects, Validators.required),
      semester: new FormControl(semester, Validators.required),
      formOfCourse: new FormControl(formOfCourse, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
      description: new FormControl(description, Validators.required),
      max: new FormControl(max, Validators.required)
    });
  }

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
    console.log("Hello");
  }
  onCancel() {
    console.log("cencel");
  }
}
