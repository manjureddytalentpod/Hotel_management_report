import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from '../Shared/user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  auth: any;
  EditProfile: any;
  SignUpdata: any;
  constructor(private router: Router) { }
  SubjectData = new Subject<boolean>();
  user = [
    {id: 1, name: 'Admin', email: 'admin@hotel.com', password: 'Manju@12345', phoneNumber: 123456789, Uaccess: 1},
    {id: 2, name: 'Partner', email: 'partner@hotel.com', password: 'Manju@12345', phoneNumber: 123456789, Uaccess: 2},
    {id: 3, name: 'user', email: 'user@hotel.com', password: 'Manju@12345', phoneNumber: 123456789, Uaccess: 3}, ];
  CheckLogin(values: any) {
    this.auth = this.user.find(data => data.email === values.value.email && data.password === values.value.password);
    if (this.auth) {
      this.SubjectData.next(true);
      return this.auth;
    } else {
      console.warn('Your name and password is wrong');
    }
  }
  ReturnAuthData() {
    this.SubjectData.next(this.auth);
  }
  SignUpForm(formdata: any) {
    this.auth  = {id: this.user.length + 1 , name: formdata.fname , email: formdata.email ,
          password: formdata.password , phoneNumber : Number(formdata.mobile), Uaccess: 3 };
    this.user.push(this.EditProfile);
    this.SubjectData.next(true);
  }
  EditUserProfile() {
    return this.auth;
    // this.SubjectData.next(this.EditProfile);
  }
  UpdateProfile(profiledata) {
    this.auth.name =  profiledata.name;
    this.auth.email =  profiledata.email;
    this.auth.phoneNumber = profiledata.phoneNumber;
    this.auth.password = profiledata.password;
    this.router.navigate(['/ShowProfile']);
  }
  ShowProfile() {
    return this.auth;
  }
}
