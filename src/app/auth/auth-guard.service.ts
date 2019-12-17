import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { take, map } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(["/login"]);
      })
    );
  }
}
