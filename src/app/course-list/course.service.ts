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
      imageUrl: "https://cokolwiek4.pl",
      semester: 1,
      tutors: []
    },
    {
      name: "Fizyka",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl: "https://cokolwiek3.pl",
      semester: 1,
      tutors: []
    },
    {
      name: "Aolikacje Internetowe",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl: "https://cokolwiek2.pl",
      semester: 1,
      tutors: []
    },
    {
      name: "PO",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl: "https://cokolwiek1.pl",
      semester: 1,
      tutors: []
    }
  ];

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.courses.slice();
  }
}
