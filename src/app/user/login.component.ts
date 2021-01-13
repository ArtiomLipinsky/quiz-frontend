import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Credentials } from './credentials';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./register.component.css']
})

export class LoginComponent implements OnInit {

  form! : FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({email: ['', [Validators.email, Validators.email]], password: ['', Validators.required]})
   }

  login(creds: Credentials): void {
    this.auth.login(creds);
  }

  ngOnInit(): void {

  }
}
