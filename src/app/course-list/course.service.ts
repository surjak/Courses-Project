import { Injectable } from "@angular/core";
import { ICourse } from "../models/icourse.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map, tap, take, exhaustMap, max } from "rxjs/operators";
import { TeachersService } from "../teacher-list/teachers.service";
import { ITutor } from "../models/itutor.model";
@Injectable({
  providedIn: "root"
})
export class CourseService {
  coursesChanged = new Subject<ICourse[]>();
  courses: ICourse[] = [];

  constructor(
    private http: HttpClient,
    private teacherService: TeachersService
  ) {}

  getCourse<ICourse>(id: string) {
    return this.courses.filter(c => c._id === id)[0];
  }
  fetchCourses() {
    return this.http
      .get<{ data: ICourse[] }>("http://localhost:8080/courses")
      .pipe(
        tap(courses => {
          console.log(courses.data);
          courses.data.forEach(t => console.log(t));
          this.setCourses(courses.data);
        })
      );
  }
  setCourses(courses: ICourse[]) {
    this.courses = courses;
    this.coursesChanged.next(this.courses.slice());
  }

  getCourses() {
    return this.courses.slice();
  }
  removeCourse(id: string) {
    this.http
      .post("http://localhost:8080/courses/delete", { courseID: id })
      .subscribe(
        res => {
          let c = this.courses.find(c => c._id === id);
          let index = this.courses.indexOf(c);
          this.courses.splice(index, 1);
          this.coursesChanged.next(this.courses.slice());
        },
        err => {
          console.log(err);
        }
      );
    console.log(this.courses);
  }

  removeTeacherFromAllCourses(id: string) {
    this.courses.forEach(course => {
      let teachets = course.tutors.filter(t => t._id != id);
      course.tutors = teachets;
    });
    console.log(this.courses);
  }

  addCourse(
    name: string,
    ects: Number,
    semester: Number,
    formOfCourse: string,
    imageUrl: string,
    description: string,
    max: Number,
    teachersID: any[]
  ) {
    return this.http
      .post<{ courseID: string }>("http://localhost:8080/courses/addCourse", {
        name: name,
        ects: ects,
        semester: semester,
        formOfCourse: formOfCourse,
        imageURL: imageUrl,
        teachers: teachersID,
        description: description,
        max: max
      })
      .pipe(
        tap(res => {
          let teacherList: ITutor[] = this.teacherService.getTeachersById(
            teachersID
          );
          let course: ICourse = {
            _id: res.courseID,
            description: description,
            ects: ects,
            formOfCourse: formOfCourse,
            grade: 0,
            imageUrl: imageUrl,
            max: max,
            name: name,
            semester: semester,
            tutors: teacherList
          };
          console.log(course);

          this.courses.push(course);
          this.coursesChanged.next(this.courses);
        })
      );
  }

  editCourse(
    id: string,
    name: string,
    ects: Number,
    semester: Number,
    formOfCourse: string,
    imageUrl: string,
    description: string,
    max: Number,
    teachersID: any[]
  ) {
    return this.http
      .post("http://localhost:8080/courses/editCourse", {
        courseId: id,
        name: name,
        ects: ects,
        semester: semester,
        formOfCourse: formOfCourse,
        imageURL: imageUrl,
        teachers: teachersID,
        description: description,
        max: max
      })
      .pipe(
        tap(res => {
          let teacherList: ITutor[] = this.teacherService.getTeachersById(
            teachersID
          );
          this.courses.map(course => {
            if (course._id == id) {
              course.name = name;
              course.ects = ects;
              course.semester = semester;
              course.formOfCourse = formOfCourse;
              course.imageUrl = imageUrl;
              course.description = description;
              course.max = max;
              course.tutors = teacherList;
            }
          });
        })
      );
  }
}
