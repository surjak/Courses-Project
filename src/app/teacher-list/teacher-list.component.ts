import { Component, OnInit } from "@angular/core";
import { TeachersService } from "./teachers.service";
import { ITutor } from "../models/itutor.model";

@Component({
  selector: "app-teacher-list",
  templateUrl: "./teacher-list.component.html",
  styleUrls: ["./teacher-list.component.css"]
})
export class TeacherListComponent implements OnInit {
  teachers: ITutor[];
  constructor(private teacherService: TeachersService) {}

  ngOnInit() {
    this.teachers = this.teacherService.getTeachers();
  }
}
