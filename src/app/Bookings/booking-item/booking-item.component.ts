import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {
  HotelData:any;
  @Input() InputData;
  constructor() { }

  ngOnInit() {
     
  }

}
