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
  courses: ICourse[] = Courses.courses;

  constructor(
    private http: HttpClient,
    private teacherService: TeachersService
  ) {}

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
    let teacherList: ITutor[] = this.teacherService.getTeachersById(teachersID);
    let course: ICourse = {
      _id: (this.courses.length + 1).toString(),
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
    let teacherList: ITutor[] = this.teacherService.getTeachersById(teachersID);
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
      tutors: [
        {
          _id: "1",
          name: "Walter",
          surname: "White",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
          mail: "ww@gmail.com",
          personalPage: "www.google.com",
          telephone: "123123123"
        },
        {
          _id: "2",
          name: "Walter",
          surname: "White",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
          mail: "ww@gmail.com",
          personalPage: "www.google.com",
          telephone: "123123123"
        }
      ]
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
      tutors: [
        {
          _id: "1",
          name: "Walter",
          surname: "White",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
          mail: "ww@gmail.com",
          personalPage: "www.google.com",
          telephone: "123123123"
        },
        {
          _id: "2",
          name: "Walter",
          surname: "White",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
          mail: "ww@gmail.com",
          personalPage: "www.google.com",
          telephone: "123123123"
        }
      ]
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
