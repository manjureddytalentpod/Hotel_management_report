import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstablishmentService } from '../../services/establishment.service';
import {AuthServiceService } from '../../Auth/auth-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult = {};
  AuthData: any;
  isEdit = true;
  constructor(private formbuilder: FormBuilder, private router: Router,
    private establishServeice: EstablishmentService, private AuthService: AuthServiceService) { }
  SearchHotel: FormGroup;
  isSignedIn = true;
  ngOnInit() {

    // const authdaa: any = this.AuthService.SubjectData.subscribe(objData => this.AuthData = objData);
    // this.AuthService.ReturnAuthData();
    // console.log(authdaa);
    // console.log(this.AuthData);

    this.SearchHotel = this.formbuilder.group({
      location: ['', [Validators.required]],
          date: ['', [Validators.required]],
          guest: ['', [Validators.required]],
  });
  }
  get FormError() {
   return  this.SearchHotel.controls;
  }
  SarchHotel() {
    if (!this.FormError.location.errors && !this.FormError.date.errors && !this.FormError.guest.errors) {
        this.establishServeice.CustomSearchHotel(this.SearchHotel.value);
        this.router.navigate(['/booking']);
    }
  }
}
