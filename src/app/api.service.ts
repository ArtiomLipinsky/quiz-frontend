import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { Question } from './question/question'
import { Quiz } from './quiz/quiz';
import { Url } from './constants/constants';

@Injectable()

export class ApiService {

  private selectedQuestion = new Subject<Question>();
  quesstionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<Quiz>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }

  public postQuestion(question: Question) {
    this.http.post(`${Url}/api/questions`, question).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  public putQuestion(question: Question) {
    this.http.put(`${Url}/api/questions/${question.id}`, question).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  public getQuestions(quizId: any) {
    return this.http.get(`${Url}/api/questions/${quizId}`)
  }

  public getQuiz() {
    return this.http.get(`${Url}/api/quizzes`)
  }

  public postQuiz(question: Quiz) {
    this.http.post(`${Url}/api/quizzes`, question).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  public putQuiz(quiz: Quiz) {
    this.http.put(`${Url}/api/quizzes/${quiz.id}`, quiz).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  public getQuizzes() {
    return this.http.get(`${Url}/api/quizzes`)
  }

  selectQuestion(question: Question){
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz: Quiz){
    this.selectedQuiz.next(quiz);
  }
}
