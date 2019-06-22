import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { Establishment } from 'src/app/Shared/establishment.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  HotelData: Establishment[] = [];
  sortingmethod: string;
  sortingIcon: string;
  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit() {
    this.sortingmethod = 'asc';
      this.establishmentService.establishmentSubject.subscribe(
        objData => this.HotelData = objData);
        this.establishmentService.getEstablishmentValue();
  }
  Sort(val: string) {
      if (this.sortingmethod === 'asc') {
          this.establishmentService.getSortValuesAsc(val);
          this.sortingmethod = 'desc';
      } else {
          this.establishmentService.getSortValuesDesc(val);
          this.sortingmethod = 'asc';
      }
  }
  }
