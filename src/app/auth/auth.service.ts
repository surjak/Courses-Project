import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IUser } from "../models/iuser.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

export interface AuthResponseData {
  id: string;
  token: string;
  email: string;
  expiresIn: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // user = new BehaviorSubject<{ _id: string; _token: string; email: string }>(
  //   null
  // );
  user = new BehaviorSubject<{
    _id: string;
    _token: string;
    email: string;
    admin: boolean;
  }>({
    _id: "123",
    _token: "almakota",
    email: "ala12@12.pl",
    admin: false
  });
  tokenExpTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated() {
    return true;
  }

  signup(email: string, password: string) {
    //todo
    this.handleAuthentication(email, "123", "alamakota", 123123);
  }

  login(email: string, password: string) {
    //todo
    this.handleAuthentication(email, "123", "alamakota", 123123);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(["/auth"]);
    localStorage.removeItem("userData");
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = {
      _id: userId,
      _token: token,
      email: email,
      admin: false
    };

    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...user, expDate: expDate })
    );
  }

  autoLogin() {
    const userData: {
      email: string;
      _id: string;
      _token: string;
      expDate: string;
    } = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }

    const loadedUser = {
      email: userData.email,
      _id: userData._id,
      _token: userData._token,
      admin: false
    };

    if (loadedUser._token) {
      this.user.next(loadedUser);
    }
    const expDur = new Date(userData.expDate).getTime() - new Date().getTime();
    this.autoLogout(expDur);
  }
}
