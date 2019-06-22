import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isSignUp = true;
  SignUpdata: any;
  constructor(private formbuilder: FormBuilder, private router: Router , private AuthService: AuthServiceService) { }
  SignUpForm: FormGroup;
  ngOnInit() {
    this.SignUpForm  = this.formbuilder.group({
      // fname : ['', [Validators.required, Validators.pattern(('[a-zA-Z]*'))]],
      name : ['', [Validators.required, Validators.pattern(('[a-zA-Z]*'))]],
      mobile : ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }
  get FormError() {
    return this.SignUpForm.controls;
   }
   getFormValue() {
      //  this.SignUpdata  = {id: 4 , name: this.SignUpForm.value.fname , email: this.SignUpForm.value.email ,
      //     password: this.SignUpForm.value.password , phoneNumber : Number(this.SignUpForm.value.mobile), Uaccess: 3 };
       this.AuthService.SignUpForm(this.SignUpForm.value);
      this.router.navigate(['/search']);
   }
}
