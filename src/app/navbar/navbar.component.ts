import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  private userSub: Subscription;
  isAuth = false;
  isAdmin = false;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuth = !!user;
      if (user) {
        this.isAdmin = user.admin;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.userService.resetCourses();
  }
}
