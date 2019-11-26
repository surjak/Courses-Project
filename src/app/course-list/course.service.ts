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
      _id: "0",
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
      _id: "1",
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
      _id: "2",
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
      _id: "3",
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

  getCourse<ICourse>(id: string) {
    return this.courses.filter(c => c._id === id)[0];
  }

  getCourses() {
    return this.courses.slice();
  }
}
