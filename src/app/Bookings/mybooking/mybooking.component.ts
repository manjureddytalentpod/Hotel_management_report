import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Booking } from '../../Shared/booking.model';
import { MybookingsService } from '../../services/mybookings.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
myBookingdata: Booking[];
  checkin = [];
  checkout = [];
  constructor(private mySrvices: MybookingsService) { }

  ngOnInit() {
    this.mySrvices.getMyHistory().subscribe(data => this.myBookingdata = data);
    console.log(this.myBookingdata);
    for (const val of this.myBookingdata) {
      const date = new Date();
      if ( val.Check_in_date < date && val.check_out_date < date) {
         this.checkin.push(val);
      } else {
        this.checkout.push(val);
      }
    }
  }

}
