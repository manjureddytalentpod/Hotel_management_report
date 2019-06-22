import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Auth/auth-service.service';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { computeStyle } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  editprofile: any;
  SignUpForm:  FormGroup;
  constructor(private AuthService: AuthServiceService, private router: Router , private formbuilder: FormBuilder) { }
  ngOnInit() {
    this.editprofile = this.AuthService.EditUserProfile();
    console.log(this.editprofile);
    this.SignUpForm  = this.formbuilder.group({
      name : ['', [Validators.required, Validators.pattern(('[a-zA-Z]*'))]],
      phoneNumber : ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
    this.SignUpForm.patchValue(this.editprofile);
  }
  get FormError() {
    return this.SignUpForm.controls;
   }
   getFormValue() {
       this.AuthService.UpdateProfile(this.SignUpForm.value);
       this.router.navigate(['/ShowProfile']);
   }

}
