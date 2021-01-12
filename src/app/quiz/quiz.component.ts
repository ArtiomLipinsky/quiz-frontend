import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Quiz } from '../quiz/quiz'


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  quiz = new Quiz();

  constructor(private api: ApiService) { }

  post(quiz: Quiz): void {
    console.log(quiz);
    this.api.postQuiz(quiz);
  }

  put(quiz: Quiz): void {
    console.log(quiz + 'put');
    this.api.putQuiz(quiz);
  }

  getEmpty(){
    this.quiz = new Quiz();
  }

  ngOnInit(): void {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }
}
