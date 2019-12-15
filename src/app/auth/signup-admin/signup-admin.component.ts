import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup-admin",
  templateUrl: "./signup-admin.component.html",
  styleUrls: ["./signup-admin.component.css"]
})
export class SignupAdminComponent implements OnInit {
  constructor(private router: Router) {}

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
    console.log(email, password, key);
  }
}
