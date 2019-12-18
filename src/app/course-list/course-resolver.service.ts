import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { CourseService } from "./course.service";
import { ITutor } from "../models/itutor.model";
@Injectable({
  providedIn: "root"
})
export class CourseResolverService implements Resolve<any> {
  constructor(private courseService: CourseService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const courses = this.courseService.getCourses();
    if (courses.length === 0) {
      return this.courseService.fetchCourses();
    } else {
      return courses;
    }
  }
}
