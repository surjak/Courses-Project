import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  error: string;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  adminmode() {
    this.router.navigate(["../signup-admin"]);
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let tutor = form.value.tutor;
    if (!tutor) {
      tutor = false;
    }
    console.log(email, password, tutor);
    this.authService.signup(email, password, null, tutor).subscribe(
      resData => {
        console.log(resData);
        console.log("aaa");
      },
      err => {
        this.error = err;
        console.log(err, "aaa");
      }
    );
  }
}
