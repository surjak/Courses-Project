import { Injectable } from "@angular/core";
import { ITutor } from "../models/itutor.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TeachersService {
  teachersChanged = new Subject<ITutor[]>();
  teachers: ITutor[] = [
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
    },
    {
      _id: "3",
      name: "Walter",
      surname: "White",
      imageUrl:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*",
      mail: "ww@gmail.com",
      personalPage: "www.google.com",
      telephone: "123123123"
    }
  ];
  constructor() {}

  getTeachers() {
    return this.teachers.slice();
  }
}
