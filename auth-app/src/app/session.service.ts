// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { Observable } from 'rxjs/Rx';
//
// //Here we injected the Http service to perform AJAX request
// // POST, GET requets
// @Injectable()
// export class SessionService {
//
//   constructor(private http: Http) { }
// //We’ve defined all our outgoing requests,
// //catching errors and delegating them to an handleError method.
//   handleError(e) {
//     return Observable.throw(e.json().message);
//   }
//
//   signup(user) {
//     return this.http.post(`/signup`, user)
//     //map takes all of your inputs runs a function on them and puts it to the outputs
//       .map(res => res.json())
//       //if you have an error, run handleError() function
//       .catch(this.handleError);
//   }
//
//   login(user) {
//     return this.http.post(`/login`, user)
//     //.map takes every single input and runs a function on it
//       .map(res => res.json())
//       .catch(this.handleError);
//   }
//
//   logout() {
//     return this.http.post(`/logout`, {})
//       .map(res => res.json())
//       .catch(this.handleError);
//   }
//
//   isLoggedIn() {
//     return this.http.get(`/loggedin`)
//       .map(res => res.json())
//       .catch(this.handleError);
//   }
//
//   getPrivateData() {
//     return this.http.get(`/private`)
//       .map(res => res.json())
//       .catch(this.handleError);
//   }
// }


import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class SessionService {
  constructor(private http: Http) { }
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  signup(user) {
    return this.http.post(`/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }
  login(user) {
    return this.http.post(`/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }
  logout() {
    return this.http.post(`/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }
  isLoggedIn() {
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
