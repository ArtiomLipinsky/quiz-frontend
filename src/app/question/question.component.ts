import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Question } from '../question/question'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  question = new Question();
  quizId! : number;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  post(question: any): void {
    console.log(question);
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }

  put(question: any): void {
    console.log(question + 'put');
    this.api.putQuestion(question);
  }

  getEmpty(){
    this.question = new Question();
  }

  ngOnInit(): void {
    this.quizId = parseInt(this.route.snapshot.paramMap.get("quizId") as string, 10);
    this.api.quesstionSelected.subscribe(question => this.question = question);
  }
}
