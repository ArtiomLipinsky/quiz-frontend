import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quiz/quizzes.component';
import { QuestionsComponent } from './question/questions.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './user/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
