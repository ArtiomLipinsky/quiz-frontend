import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  template: `
  <h1>Your score</h1>
  <h2>{{data.correct}} of {{data.total}}</h2>
  `,
})

export class FinishedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data : any){}
}
