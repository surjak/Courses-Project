import { Component, OnInit } from "@angular/core";
import { TeachersService } from "../teacher-list/teachers.service";
import { ITutor } from "../models/itutor.model";
import { CourseService } from "../course-list/course.service";

@Component({
  selector: "app-remove-teacher",
  templateUrl: "./remove-teacher.component.html",
  styleUrls: ["./remove-teacher.component.css"]
})
export class RemoveTeacherComponent implements OnInit {
  teachers: ITutor[];
  constructor(
    private teacherService: TeachersService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.teacherService.teachersChanged.subscribe(
      teachers => (this.teachers = teachers)
    );
    this.teachers = this.teacherService.getTeachers();
  }
  onRemoveTeacher(id: string) {
    this.teacherService.removeTeacher(id);
    this.courseService.removeTeacherFromAllCourses(id);
  }
}
