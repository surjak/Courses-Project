import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICourse } from "src/app/models/icourse.model";
import { CourseService } from "src/app/course-list/course.service";
import { map } from "rxjs/operators";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TeachersService } from "src/app/teacher-list/teachers.service";

@Component({
  selector: "app-edit-course-item",
  templateUrl: "./edit-course-item.component.html",
  styleUrls: ["./edit-course-item.component.css"]
})
export class EditCourseItemComponent implements OnInit, OnDestroy {
  forms: any[];
  formOfCourse: string;
  courseForm: FormGroup;
  courseTeachers = [];
  course: ICourse;
  teachers = [];
  error: string;
  ects: Number = 0;
  semester: Number = 1;
  semesters: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ectses: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private teacherService: TeachersService,
    private router: Router
  ) {}
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
  private initForm() {
    let name: string = this.course.name;

    let imageUrl: string = this.course.imageUrl;
    let description: string = this.course.description;
    let max: Number = this.course.max;

    this.courseForm = new FormGroup({
      name: new FormControl(name, Validators.required),

      imageUrl: new FormControl(imageUrl, Validators.required),
      description: new FormControl(description, Validators.required),
      max: new FormControl(max, Validators.required)
    });
  }

  ngOnInit() {
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
      this.formOfCourse = this.course.formOfCourse;
      this.semester = this.course.semester;
      this.ects = this.course.ects;
    });
    this.forms = [this.formOfCourse, "Lecture", "Exercises", "Project", "Lab"];
    this.forms = [...new Set(this.forms)];
    this.ectses = [this.ects, ...this.ectses];
    this.semesters = [this.semester, ...this.semesters];
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

    this.initForm();
  }

  ngOnDestroy() {
    this.teachers.map(t => {
      this.courseTeachers.forEach(id => {
        t.selected = false;
      });
    });
  }

  onSubmit() {
    let id: string = this.course._id;
    let name: string = this.courseForm.value["name"];
    let imageUrl: string = this.courseForm.value["imageUrl"];
    let description: string = this.courseForm.value["description"];
    let max: Number = this.courseForm.value["max"];

    this.courseService
      .editCourse(
        id,
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
          this.router.navigate(["/courses"]);
        },
        err => {
          this.error = err;
        }
      );
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
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
