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
  courses: ICourse[] = Courses.courses;

  constructor(private http: HttpClient) {}

  getCourse<ICourse>(id: string) {
    return this.courses.filter(c => c._id === id)[0];
  }

  getCourses() {
    return this.courses.slice();
  }
  removeCourse(id: string) {
    let c = this.courses.find(c => c._id === id);
    let index = this.courses.indexOf(c);
    this.courses.splice(index, 1);
    this.coursesChanged.next(this.courses.slice());
    console.log(this.courses);
  }
}

export class Courses {
  static courses = [
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
      max: 1,
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
      max: 1,
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
      max: 1,
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
      max: 1,
      tutors: []
    },
    {
      _id: "4",
      name: "Matma",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",

      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "5",
      name: "Fizyka",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "6",
      name: "Aolikacje Internetowe",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "7",
      name: "PO",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "8",
      name: "Matma",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",

      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "9",
      name: "Fizyka",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "10",
      name: "Aolikacje Internetowe",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      max: 1,
      tutors: []
    },
    {
      _id: "11",
      name: "PO",
      ects: 1,
      description: "fajny kurs",
      formOfCourse: "Lecture",
      grade: 3,
      imageUrl:
        "http://wolnedzieci.eu/wp-content/uploads/2018/08/wolnedzieci-matematyka-uczymy-dzieci-w-domu_.jpg",
      semester: 1,
      max: 1,
      tutors: []
    }
  ];
}
