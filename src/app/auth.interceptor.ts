import { Injectable } from '@angular/core'
import { HttpClient, HttpInterceptor } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Question } from './question/question'
import { Quiz } from './quiz/quiz';
import { Url } from './constants/constants';
import { Credentials } from './user/credentials'

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: any, next: { handle: (req:any) => any; }) {
    console.log(req);
    var token = localStorage.getItem('token');
    var authRequest = req.clone({
      headers: req.headers.set('Authorization',`Bearer ${token}`)
    })
    return next.handle(authRequest);
  }
}
