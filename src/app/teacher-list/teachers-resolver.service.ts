import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { TeachersService } from "./teachers.service";
import { ITutor } from "../models/itutor.model";

@Injectable({
  providedIn: "root"
})
export class TeachersResolverService implements Resolve<any> {
  constructor(private teacherService: TeachersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const teachers = this.teacherService.getTeachers();
    if (teachers.length === 0) {
      return this.teacherService.fetchTeachers();
    } else {
      return teachers;
    }
  }
}
