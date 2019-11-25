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
  courses: ICourse[] = [
    {
      name: "Matma",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      tutors: []
    },
    {
      name: "Fizyka",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      tutors: []
    },
    {
      name: "Aolikacje Internetowe",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      tutors: []
    },
    {
      name: "PO",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      tutors: []
    }
  ];

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.courses.slice();
  }
}
