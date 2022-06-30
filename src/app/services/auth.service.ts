import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  
  isAuthenticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 600);
    });
    return promise;
  }

  //=======================================
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    console.log(this.getToken());
    if(this.getToken() === null) {
      return false;
    }
    this.loggedIn = true;
    return true;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(email: string, password: string, keepMeLoggedIn:boolean) {
    if (email === 'admin@gmail.com' && password === '123123') {
      this.loggedIn = true;
      if(keepMeLoggedIn)
        this.setToken('authToken');
      return of({ name: 'Badal Das', email: 'badal.swami360@gmail.com' });
    }
    return throwError(new Error('Incorrect username or password'));
  }}
