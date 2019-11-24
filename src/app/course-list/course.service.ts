import { Injectable } from "@angular/core";
import { ICourse } from "../models/icourse.model";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map, tap, take, exhaustMap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class CourseService {
  coursesChanged = new Subject<ICourse[]>();
  courses: ICourse[];

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<ICourse[]>("./assets/courses.mock.json").pipe(
      tap(data => {
        this.courses = data;
      })
    );
  }
}
