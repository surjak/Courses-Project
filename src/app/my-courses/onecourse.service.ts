import { Injectable } from "@angular/core";
import { ICourse } from "../models/icourse.model";
import { UserService } from "../user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CourseService } from "../course-list/course.service";
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OnecourseService {
  countOfNotes: number;
  sumOfNotes: number;
  rate: number;
  course: ICourse;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private http: HttpClient
  ) {}

  setCourse(idd) {
    return this.http
      .post<any>("http://localhost:8080/courses/getUserCourseById", {
        c_id: idd
      })
      .pipe(
        tap(res => {
          console.log(res.data);

          const {
            _id,
            description,
            name,
            ects,
            semester,
            formOfCourse,
            imageURL,
            max,
            countOfNotes,
            sumOfNotes,
            teachers,
            attendees,
            comments
          } = res.data.courseId;
          let grade = 0;
          if (countOfNotes != 0) {
            grade = +(sumOfNotes / countOfNotes).toFixed(2);
          }
          this.countOfNotes = countOfNotes;
          this.sumOfNotes = sumOfNotes;
          this.rate = res.data.note;
          this.course = {
            _id: _id,
            description: description,
            ects: ects,
            formOfCourse: formOfCourse,
            imageUrl: imageURL,
            max: max,
            name: name,
            semester: semester,
            tutors: teachers,
            attendees: attendees,
            comments: comments,
            grade: grade
          };
        })
      );
  }
  rateCourse(newRate: number) {
    return this.http
      .post("http://localhost:8080/courses/rate", {
        courseId: this.course._id,
        rate: newRate
      })
      .pipe(
        tap(res => {
          if (this.rate == null) {
            this.rate = newRate;
            this.countOfNotes++;
            this.sumOfNotes += newRate;
            this.course.grade = +(this.sumOfNotes / this.countOfNotes).toFixed(
              2
            );
          } else {
            this.sumOfNotes -= this.rate;
            this.sumOfNotes += newRate;
            this.rate = newRate;
            this.course.grade = +(this.sumOfNotes / this.countOfNotes).toFixed(
              2
            );
          }
          this.courseService.editCourseRate(this.course._id, this.course.grade);
        })
      );
  }
}
