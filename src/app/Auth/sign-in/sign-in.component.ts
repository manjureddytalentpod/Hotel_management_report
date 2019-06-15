import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  SignInForm : FormGroup ;

  constructor(private formbuilder : FormBuilder , private router:Router ) { }
  ngOnInit() {
    this.SignInForm =  this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    }) ;
  }
  get FormError(){
   return this.SignInForm.controls;
  }
  getFormValue(){
    console.log(this.SignInForm.value);
    if(!this.FormError.email.errors && ! this.FormError.password.errors ){
      alert("correct");
      this.router.navigate(['/booking']);
    }
    else{
     console.warn("Check Email and Password");
    }
    
  }

}
