import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { Establishment } from 'src/app/Shared/establishment.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  HotelData:Establishment[]=[];
  // len:number;
  constructor(private establishmentService:EstablishmentService) { }

  ngOnInit() {
      this.establishmentService.establishmentSubject.subscribe(
        objData => this.HotelData = objData);
        this.establishmentService.getEstablishmentValue();
        //this.len = this.HotelData.length;
  }
  SortRate(val){
    this.establishmentService.getSortValues(val);
  }
  SortPrice(val){
    this.establishmentService.getSortValues(val);
  }
    
     
}