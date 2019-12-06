import { Component, OnInit } from "@angular/core";
import { TeachersService } from "../teachers.service";
import { ActivatedRoute } from "@angular/router";
import { ITutor } from "src/app/models/itutor.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-teacher-details",
  templateUrl: "./teacher-details.component.html",
  styleUrls: ["./teacher-details.component.css"]
})
export class TeacherDetailsComponent implements OnInit {
  teacher: ITutor;
  constructor(
    private teacherService: TeachersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.pipe(map(params => params["id"])).subscribe(id => {
      this.teacher = this.teacherService.getTeachersById([id])[0];
    });
  }
}
