import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  SignInForm: FormGroup ;
  isSignUp = true;
  auth: any;
  isSignIn = true;
  constructor(private formbuilder: FormBuilder , private router: Router, private AuthService: AuthServiceService ) { }
  ngOnInit() {
    this.SignInForm =  this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    }) ;
  }
  get FormError() {
   return this.SignInForm.controls;
  }
  getFormValue() {
    if (!this.FormError.email.errors && ! this.FormError.password.errors ) {
      this.auth = this.AuthService.CheckLogin(this.SignInForm);
      if (this.auth) {
        this.router.navigate(['/search']);
      } else {
        alert('Username and passord is wrong');
      }
    } else {
     console.warn('Check Email and Password');
    }
}
}
