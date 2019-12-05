import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ITutor } from "src/app/models/itutor.model";
import { TeachersService } from "src/app/teacher-list/teachers.service";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  teachers: ITutor[];
  courseTeachers = [];
  constructor(private teacherService: TeachersService) {}

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
    this.teachers = this.teacherService.getTeachers();
  }
  onSubmit() {
    console.log("Hello");
  }
  onCancel() {
    console.log("cencel");
  }
  addTeacher(e, id: string) {
    let flag = false;
    e.target.classList.forEach(c => {
      if (c == "active") {
        console.log("active was");
        flag = true;
        e.target.classList.toggle("active");
        this.courseTeachers = this.courseTeachers.filter(e => e != id);
        console.log(this.courseTeachers);
      }
    });
    if (!flag) {
      e.target.classList.toggle("active");
      this.courseTeachers.push(id);
      console.log(this.courseTeachers);
    }
  }
}
