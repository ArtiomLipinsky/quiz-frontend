import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Question } from '../question/question'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionsComponent implements OnInit {

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  public questions : Question[] = [];

  post(question: Question): void {
    console.log(question);
    this.api.postQuestion(question);
  }

  ngOnInit(): void {
    this.api.getQuestions(this.route.snapshot.paramMap.get("quizId")).subscribe(res => {
      this.questions = res as Question[];
    });
  }
}
