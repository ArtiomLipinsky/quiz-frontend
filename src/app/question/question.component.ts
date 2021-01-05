import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  template: 'This is uor question'
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
