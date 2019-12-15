import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-signup-admin",
  templateUrl: "./signup-admin.component.html",
  styleUrls: ["./signup-admin.component.css"]
})
export class SignupAdminComponent implements OnInit {
  error: string;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}
  usermode() {
    this.router.navigate(["../signup"]);
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    const key = form.value.key;
    let tutor = form.value.tutor;
    if (!tutor) {
      tutor = false;
    }
    console.log(email, password, key, tutor);
    this.authService.signup(email, password, key, false).subscribe(
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
