import { Injectable } from "@angular/core";
import { ITutor } from "../models/itutor.model";
import { Subject } from "rxjs";
import { CourseService } from "../course-list/course.service";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { log } from "util";

@Injectable({
  providedIn: "root"
})
export class TeachersService {
  teachersChanged = new Subject<ITutor[]>();
  teachers: ITutor[] = [
    // {
    //   _id: "1",
    //   name: "Walter",
    //   surname: "White",
    //   imageUrl:
    //     "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
    //   mail: "ww@gmail.com",
    //   personalPage: "www.google.com",
    //   telephone: "123123123"
    // }
    // {
    //   _id: "2",
    //   name: "Walter",
    //   surname: "White",
    //   imageUrl:
    //     "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
    //   mail: "ww@gmail.com",
    //   personalPage: "www.google.com",
    //   telephone: "123123123"
    // },
    // {
    //   _id: "3",
    //   name: "Walter",
    //   surname: "White",
    //   imageUrl:
    //     "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
    //   mail: "ww@gmail.com",
    //   personalPage: "www.google.com",
    //   telephone: "123123123"
    // }
  ];
  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.teachers.slice();
  }
  getTeachersById(list: any[]) {
    let teachersList: ITutor[] = [];
    list.forEach(id => {
      this.teachers.forEach(t => {
        if (t._id == id) {
          teachersList.push(t);
        }
      });
    });
    return teachersList;
  }
  removeTeacher(id: string) {
    let c = this.teachers.find(c => c._id === id);
    let index = this.teachers.indexOf(c);
    this.teachers.splice(index, 1);
    this.teachersChanged.next(this.teachers.slice());
    console.log(this.teachers);
  }

  addTeacher(
    name: string,
    surname: string,
    imageUrl: string,
    telephone: string,
    mail: string,
    personalPage: string
  ) {
    return this.http
      .post<{ _id: string }>("http://localhost:8080/teachers/new", {
        name: name,
        email: mail,
        surname: surname,
        imageUrl: imageUrl,
        telephone: telephone,
        page: personalPage
      })
      .pipe(
        tap(resData => {
          let teacher: ITutor = {
            _id: resData._id,
            imageUrl: imageUrl,
            mail: mail,
            name: name,
            personalPage: personalPage,
            surname: surname,
            telephone: telephone
          };
          this.teachers.push(teacher);
          this.teachersChanged.next(this.teachers);
          console.log(this.teachers);
        })
      );
  }
  setTeachers(teachers: ITutor[]) {
    this.teachers = teachers;
    console.log(this.teachers);

    this.teachersChanged.next(this.teachers.slice());
  }

  fetchTeachers() {
    return this.http
      .get<{ teachers: ITutor[] }>("http://localhost:8080/teachers")
      .pipe(
        tap(teachers => {
          console.log(teachers.teachers);
          teachers.teachers.forEach(t => console.log(t));
          this.setTeachers(teachers.teachers);
        })
      );
  }
}
