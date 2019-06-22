import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EstablishmentService } from '../../services/establishment.service';

@Component({
  selector: 'app-searchhotel',
  templateUrl: './searchhotel.component.html',
  styleUrls: ['./searchhotel.component.css']
})
export class SearchhotelComponent implements OnInit {
  constructor(private formbuilder: FormBuilder , private router: Router, private establishServeice: EstablishmentService) { }
  SearchHotel: FormGroup;
  ngOnInit() {
    this.SearchHotel = this.formbuilder.group({
      location : ['', [Validators.required]],
          date: ['', [Validators.required]],
          guest: ['', [Validators.required]],
    });
    this.SearchHotel.patchValue(this.establishServeice.getsearchResult());
  }
  get FormError() {
   return  this.SearchHotel.controls;
  }
  SarchHotel() {
    if (!this.FormError.location.errors && !this.FormError.date.errors && !this.FormError.guest.errors) {
      this.establishServeice.CustomSearchHotel(this.SearchHotel.value);
    }
  }
}
