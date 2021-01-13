import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Question } from './question/question'
import { Quiz } from './quiz/quiz';
import { Url } from './constants/constants';
import { Credentials } from './user/credentials'
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  get username() {
    return localStorage.getItem('username');
  }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  public register(creds: Credentials) {
    this.http.post<any>(`${Url}/api/account`, creds).subscribe(
      res => {
        this.authenticate(res);
      }
    );
  };

  public login(creds: Credentials) {
    this.http.post<any>(`${Url}/api/account/login`, creds).subscribe(
      res => {
        this.authenticate(res);
      }
    );
  };

  public logout(){
    localStorage.removeItem('token');
  }

  authenticate(res:any){
    console.log(res);
    localStorage.setItem('token', res.token);
    localStorage.setItem('username', res.userName);
    this.router.navigate(['/']);
  }
}
