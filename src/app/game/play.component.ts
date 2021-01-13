import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Quiz } from '../quiz/quiz'


@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

  quizzes! : Quiz[];

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllQuizzes().subscribe(res => {
      this.quizzes = res as Quiz[];
    });
  }
}
