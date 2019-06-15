import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formbuilder : FormBuilder) { }
  SignUpForm : FormGroup;
  ngOnInit() {
    this.SignUpForm  = this.formbuilder.group({
      fname : ['',[Validators.required,Validators.pattern(('[a-zA-Z]*'))]],
      lname : ['',[Validators.required,Validators.pattern(('[a-zA-Z]*'))]],
      mobile :['',[Validators.required,Validators.minLength(10)]],
      email:['',[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }
  get FormError(){
    return this.SignUpForm.controls;
   }

}
