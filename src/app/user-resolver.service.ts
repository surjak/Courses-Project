import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class UserResolverService implements Resolve<any> {
  constructor(private userService: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("hejjjjj");

    const courses = this.userService.getCourses();
    if (courses.length === 0) {
      return this.userService.fetchCourses();
    } else {
      return courses;
    }
  }
}
