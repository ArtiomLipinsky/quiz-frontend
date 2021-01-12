import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Quiz } from '../quiz/quiz'

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizzesComponent implements OnInit {

  constructor(public api: ApiService) { }

  public quizzes : Quiz[] = [];

  post(question: Quiz): void {
    console.log(question);
    this.api.postQuiz(question);
  }

  ngOnInit(): void {
    this.api.getQuizzes().subscribe(res => {
      this.quizzes = res as Quiz[];
    });
  }
}
