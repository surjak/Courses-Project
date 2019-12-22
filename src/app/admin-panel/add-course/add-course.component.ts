import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Route } from "@angular/router";
import { FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ITutor } from "src/app/models/itutor.model";
import { TeachersService } from "src/app/teacher-list/teachers.service";
import { CourseService } from "src/app/course-list/course.service";
import { ICourse } from "src/app/models/icourse.model";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  forms: any[] = ["Lecture", "Exercises", "Project", "Lab"];
  formOfCourse: string = "Lecture";
  error: string;
  courseForm: FormGroup;
  teachers: ITutor[];
  courseTeachers = [];
  ects: number = 0;
  semester: number = 1;
  semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ectses = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor(
    private teacherService: TeachersService,
    private courseService: CourseService,
    private route: Router,
    private actRoute: ActivatedRoute
  ) {}

  private initForm() {
    let name: string;
    let imageUrl: string;
    let description: string;
    let max: Number;

    this.courseForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imageUrl: new FormControl(imageUrl, Validators.required),
      description: new FormControl(description, Validators.required),
      max: new FormControl(max, Validators.required)
    });
  }

  ngOnInit() {
    this.initForm();
    this.teachers = this.teacherService.getTeachers();
  }
  changeForm(e) {
    this.formOfCourse = e.target.value;
    console.log(this.formOfCourse);
  }
  changeEcts(e) {
    this.ects = e.target.value;
    console.log(this.ects);
  }
  changeSemester(e) {
    this.semester = e.target.value;
    console.log(this.semester);
  }
  onSubmit() {
    let name: string = this.courseForm.value["name"];

    let imageUrl: string = this.courseForm.value["imageUrl"];
    let description: string = this.courseForm.value["description"];
    let max: Number = this.courseForm.value["max"];

    this.courseService
      .addCourse(
        name,
        this.ects,
        this.semester,
        this.formOfCourse,
        imageUrl,
        description,
        max,
        this.courseTeachers
      )
      .subscribe(
        res => {
          this.route.navigate(["/courses"]);
        },
        err => {
          this.error = err;
        }
      );
  }
  onCancel() {
    this.route.navigate(["../"], { relativeTo: this.actRoute });
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
