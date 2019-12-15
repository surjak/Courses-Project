import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password, "aaa");
    // const user = { id: 1, name: "Hello" };
    // const headers = new HttpHeaders()
    //   .set("Authorization", "my-auth-token")
    //   .set("Content-Type", "application/json");
    // this.http
    //   .post("http://localhost:8080/", JSON.stringify(user), {
    //     headers: headers
    //   })
    //   .subscribe(data => {
    //     console.log(data);
    //   });
  }
}
