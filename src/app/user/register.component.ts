import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Credentials } from './credentials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  form! : FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({email: ['', [Validators.email, Validators.email]], password: ['', Validators.required]})
   }


  post(quiz: Credentials): void {
    console.log(quiz);
    // this.api.Register(quiz);
  }

  register(creds: Credentials): void {
    this.auth.register(creds);
  }

  ngOnInit(): void {

  }
}
