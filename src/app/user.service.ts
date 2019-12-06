import { Injectable } from "@angular/core";
import { IUser } from "./models/iuser.model";
import { CourseService } from "./course-list/course.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: IUser = {
    _id: "0",
    _token: "ala123",
    admin: true,
    tutor: false,
    email: "aaa@12.pl",
    courses: []
  };
  constructor(private courseService: CourseService) {}

  getCourses() {
    return this.user.courses.slice();
  }

  joinCourse(id) {
    let flag = true;
    this.user.courses.forEach(c => {
      if (c._id == id) {
        flag = false;
      }
    });
    if (flag) {
      this.user.courses.push(this.courseService.getCourse(id));
    }

    console.log(this.user.courses);
  }
}
