import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Quiz } from '../quiz/quiz';
import { Question } from '../question/question';
import { ActivatedRoute } from '@angular/router';
import { FinishedComponent } from './finished.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'playQUiz',
  templateUrl: './playQUiz.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayQuizComponent implements OnInit {

  quizId!: string;
  public questions!: Question[];


  constructor(public api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  isAllAnswered(): boolean {
    return !this.questions.find(q => !q.selectedAnswer);
  }

  check() {
    var correct = this.questions.filter(q => q.selectedAnswer == q.correctAnswer).length;
    this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length }
    });
  }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId') || '';

    this.api.getQuestions(this.quizId).subscribe(res => {
      this.questions = res as Question[];

      this.questions.forEach(q => {
        q.answers = [
          q.correctAnswer,
          q.wrongAnswerA,
          q.wrongAnswerB,
          q.wrongAnswerC
        ];
        this.shuffle(q.answers);
      });
    });
  }

  private shuffle(a: Array<any>) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
