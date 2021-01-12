import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Question } from './question/question'
import { Quiz } from './quiz/quiz';
import { Url } from './constants/constants';
import { Credentials } from './user/credentials'

@Injectable()

export class AuthService {

  constructor(private http: HttpClient) { }

  public register(creds: Credentials) {
    this.http.post<any>(`${Url}/api/account`, creds).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
      }
    );
  }

}
