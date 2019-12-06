import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICourse } from "src/app/models/icourse.model";
import { CourseService } from "src/app/course-list/course.service";
import { map } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TeachersService } from "src/app/teacher-list/teachers.service";
import { ITutor } from "src/app/models/itutor.model";

@Component({
  selector: "app-edit-course-item",
  templateUrl: "./edit-course-item.component.html",
  styleUrls: ["./edit-course-item.component.css"]
})
export class EditCourseItemComponent implements OnInit {
  courseForm: FormGroup;
  courseTeachers = [];
  course: ICourse;
  teachers = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private teacherService: TeachersService,
    private router: Router
  ) {}

  private initForm() {
    let name: string = this.course.name;
    let ects: Number = this.course.ects;
    let semester: Number = this.course.semester;
    let formOfCourse: string = this.course.formOfCourse;
    let imageUrl: string = this.course.imageUrl;
    let description: string = this.course.description;
    let max: Number = this.course.max;

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
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
    });
    this.course.tutors.forEach(t => {
      this.courseTeachers.push(t._id);
    });
    console.log(this.courseTeachers);

    this.teachers = this.teacherService.getTeachers();

    this.teachers.map(t => {
      this.courseTeachers.forEach(id => {
        if (t._id == id) {
          t.selected = true;
        }
      });
    });
    console.log(this.teachers);

    this.initForm();
  }

  onSubmit() {
    let id: string = this.course._id;
    let name: string = this.courseForm.value["name"];
    let ects: Number = this.courseForm.value["ects"];
    let semester: Number = this.courseForm.value["semester"];
    let formOfCourse: string = this.courseForm.value["formOfCourse"];
    let imageUrl: string = this.courseForm.value["imageUrl"];
    let description: string = this.courseForm.value["description"];
    let max: Number = this.courseForm.value["max"];

    this.courseService.editCourse(
      id,
      name,
      ects,
      semester,
      formOfCourse,
      imageUrl,
      description,
      max,
      this.courseTeachers
    );
    this.router.navigate(["/courses"]);
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
