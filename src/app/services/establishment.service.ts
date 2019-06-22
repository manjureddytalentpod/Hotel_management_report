import { Injectable } from '@angular/core';
import { Establishment } from '../Shared/establishment.model';
import { User } from '../Shared/user.model';
import { Observable, of, Subject } from 'rxjs';
import { Review } from '../Shared/review.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {
  review: Review[] = [
    {id: 1, rating: 4, reviewed_by: new User('naveen'),
    establishment: new Establishment('Manju', 5, 1200),
     reviewcontent: 'Very good hotel'},
    {id: 1, rating: 1, reviewed_by: new User('suresh'),
    establishment: new Establishment('Manju', 5, 1200),
    reviewcontent: 'best for Honeymoon'},
    {id: 1, rating: 3, reviewed_by: new User('man'),
    establishment: new Establishment('Manju', 5, 1200),
    reviewcontent: 'only good for couples'},
    {id: 1, rating: 2, reviewed_by: new User('subu'),
     establishment: new Establishment('Manju', 5, 1200),
      reviewcontent: 'single bed, Best for Couples'},
  ];

  establishmentSubject = new Subject<Establishment[]>();
  establishment: Establishment[] = [ ];
  SortValues = [];
  searchDetails = {};
  customSearchResult = [];
  SingleHotelResult;
  constructor(private http: HttpClient) {}
  getEstablishmentValue() {
    this.establishmentSubject.next(this.customSearchResult.slice());
  }
  filtereddata : Establishment[]= [];
  getFilteredValues(val) {
      this.filtereddata = [];
      this.filtereddata =  this.customSearchResult.slice().filter(data => data.price >= val.sliderValue);
      console.log(this.filtereddata);
      if (val.search) {
        this.filtereddata = this.filtereddata.filter(data => data.name === val.search);
      }
      if ( val.ratings ) {
        this.filtereddata = this.filtereddata.filter(data => data.averagerating >= val.ratings);
      }
      if (!val.hotel) {
        this.filtereddata = this.filtereddata.filter(data => data.type !== 'hotel');
      }
      if (!val.homestay) {
        this.filtereddata = this.filtereddata.filter(data => data.type !== 'homestay');
      }
      // this.customSearchResult = filtereddata;
    this.establishmentSubject.next(this.filtereddata);
  }
  getSortValuesAsc(valu) {
    if (this.filtereddata.length === 0) {
      this.SortValues = this.customSearchResult.sort((a, b) => a[valu] - b[valu]);
      this.establishmentSubject.next(this.SortValues);
    } else {
      this.SortValues = this.filtereddata.sort((a, b) => a[valu] - b[valu]);
      this.establishmentSubject.next(this.SortValues);
    }
  }
  getSortValuesDesc(valu) {
    if (this.filtereddata.length === 0) {
      this.SortValues = this.customSearchResult.sort((a, b) => a[valu] - b[valu]);
      this.establishmentSubject.next(this.SortValues);
    } else {
      this.SortValues =  this.filtereddata.sort((a, b) => b[valu] - a[valu]);
      this.establishmentSubject.next(this.SortValues);
    }
  }
  CustomSearchHotel(data) {
    this.searchDetails =  data;
    console.log(data);
    this.http.get('https://api.myjson.com/bins/1g4yrl').subscribe((val: Establishment[]) => {
      this.establishment = val;
      console.log(this.establishment);
      this.customSearchResult =  this.establishment.filter(values => values.city === data.location);
     this.customSearchResult = this.customSearchResult.filter(values => values.capacity >= data.guest);
     this.establishmentSubject.next(this.customSearchResult);
      });
    }
    getsearchResult() {
      return this.searchDetails;
    }
    getSingleItemDetails(data: number) {
      this.SingleHotelResult = this.establishment.find(values => values.id === data);
      return this.SingleHotelResult;
    }
}
