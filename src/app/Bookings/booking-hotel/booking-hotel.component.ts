import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { EstablishmentService } from '../../services/establishment.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-hotel',
  templateUrl: './booking-hotel.component.html',
  styleUrls: ['./booking-hotel.component.css']
})
export class BookingHotelComponent implements OnInit {
  HotelData: any;
  SearchResult: any;
  formdata: FormGroup;
  noofdays: number;
  searchResult: any;
      constructor(private router: Router, private formbuilder: FormBuilder,
      private essatbalismentService: EstablishmentService, private ActRoute: ActivatedRoute ) { }
  ngOnInit() {
    const id: any = this.ActRoute.snapshot.paramMap.get('id');
    this.HotelData =  this.essatbalismentService.getSingleItemDetails(+id);
    this.formdata = this.formbuilder.group({
      sdate: [],
      todate: [],
    });
    this.formdata.valueChanges.subscribe(dates => {
      const fdate: any = new Date(dates.sdate).getDate();
      const ldate: any =  new Date(dates.todate).getDate();
      this.noofdays = ldate - fdate;
  });

  this.searchResult =  this.essatbalismentService.getsearchResult();
  this.formdata.get('sdate').setValue(this.searchResult['date']);
  const da: any = new Date(this.searchResult.date);
  const daaa: any = new Date(da.setDate(da.getDate() + 1));
  this.formdata.get('todate').setValue(daaa);
}
  conform() {
    const con: any = confirm('Are you Sure Want to Book');
  }
}
