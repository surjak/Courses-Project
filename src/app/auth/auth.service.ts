import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { IUser } from "../models/iuser.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { catchError, tap } from "rxjs/operators";

export interface AuthResponseData {
  _id: string;
  token: string;
  email: string;
  userId: string;
  admin: boolean;
  tutor: boolean;
  expiresIn: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<{
    _id: string;
    _token: string;
    email: string;
    admin: boolean;
    tutor: boolean;
  }>(null);

  tokenExpTimer: any;
  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated() {
    return true;
  }

  signup(
    email: string,
    password: string,
    adminPassword: string,
    tutor: boolean
  ) {
    return this.http
      .post<AuthResponseData>("http://localhost:8080/auth/signup", {
        email: email,
        password: password,
        admin: adminPassword,
        tutor: tutor
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.router.navigate(["../login"]);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>("http://localhost:8080/auth/login", {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.userId,
            resData.token,
            +resData.expiresIn,
            resData.admin,
            resData.tutor
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(["/login"]);
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
    expiresIn: number,
    admin: boolean,
    tutor: boolean
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = {
      _id: userId,
      _token: token,
      email: email,
      admin: admin,
      tutor: tutor
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
      admin: boolean;
      tutor: boolean;
    } = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      return;
    }

    const loadedUser = {
      email: userData.email,
      _id: userData._id,
      _token: userData._token,
      admin: userData.admin,
      tutor: userData.tutor
    };

    if (loadedUser._token) {
      this.user.next(loadedUser);
    }
    const expDur = new Date(userData.expDate).getTime() - new Date().getTime();
    this.autoLogout(expDur);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let error = null;
    if (errorRes.error.message) {
      error = errorRes.error.message;
    }
    if (errorRes.error.data) {
      error = errorRes.error.data[0].msg;
    }

    if (error == null) {
      error = "An unknown error occured!";
    }
    return throwError(error);
  }
}
