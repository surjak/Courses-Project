import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { OnecourseService } from "./onecourse.service";

@Injectable({
  providedIn: "root"
})
export class OneCourseServiceResolver implements Resolve<any> {
  constructor(private oneCourseService: OnecourseService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.params["id"]);

    return this.oneCourseService.setCourse(route.params["id"]);
  }
}
