import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    //login form
    this.signinForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  //login
  loginUser() {
    this.authService.signIn(this.signinForm.value)
  }
}
