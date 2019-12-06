import { Component, OnInit, Inject, Input } from "@angular/core";
import { ITutor } from "src/app/models/itutor.model";

@Component({
  selector: "app-teacher",
  templateUrl: "./teacher.component.html",
  styleUrls: ["./teacher.component.css"]
})
export class TeacherComponent implements OnInit {
  @Input() teacher: ITutor;
  constructor() {}

  ngOnInit() {}
}
