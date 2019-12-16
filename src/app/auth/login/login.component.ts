import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error: string;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password).subscribe(
      res => {
        console.log(res);

        this.router.navigate(["/courses"]);
      },
      errMessage => {
        this.error = errMessage;
      }
    );
    form.reset();
  }
}
