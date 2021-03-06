import { Injectable } from "@angular/core";
import { IUser } from "./models/iuser.model";
import { CourseService } from "./course-list/course.service";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { ICourse } from "./models/icourse.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: IUser = {
    _id: null,
    _token: null,
    admin: null,
    tutor: null,
    email: null,
    courses: []
  };
  constructor(private courseService: CourseService, private http: HttpClient) {}

  getCourses() {
    return this.user.courses.slice();
  }
  resetCourses() {
    this.user.courses = [];
  }

  joinCourse(id) {
    let flag = true;
    this.user.courses.forEach(c => {
      if (c._id == id) {
        flag = false;
      }
    });
    if (this.user.courses.length == 0) {
      this.fetchCourses().subscribe(res => console.log(res));
    }
    if (flag) {
      const course = this.courseService.getCourse(id);
      if (course.attendees < course.max) {
        this.user.courses.push(course);
      }
    }
    return this.http
      .post("http://localhost:8080/courses/addCourseToUser", {
        courseId: id
      })
      .pipe(
        tap(res => {
          console.log(res);
        })
      );
  }
  fetchCourses() {
    return this.http
      .get<{ data: any }>("http://localhost:8080/courses/getUserCourses")
      .pipe(
        tap(courses => {
          console.log(courses.data);
          courses.data.forEach(c => {
            this.user.courses.push({
              _id: c.courseId._id,
              name: c.courseId.name,
              ects: c.courseId.ects,
              description: c.courseId.description,
              formOfCourse: c.courseId.formOfCourse,
              grade: c.courseId.grade,
              imageUrl: c.courseId.imageURL,
              max: c.courseId.max,
              semester: c.courseId.semester,
              tutors: c.courseId.teachers,
              attendees: c.courseId.attendees,
              comments: c.courseId.comments
            });
          });
        })
      );
  }
}
