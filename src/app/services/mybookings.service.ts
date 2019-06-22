import { Injectable } from '@angular/core';
import { Booking } from '../Shared/booking.model';
import { User } from '../Shared/user.model';
import { Establishment } from '../Shared/establishment.model';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MybookingsService {

  constructor() { }
  bookinghistory: Booking[] = [{ Booked_by: new User('naveen'),
  establishment: new Establishment('leelaplace', 4, 5000),
  Check_in_date: new Date('6/06/2019'), check_out_date: new Date('06/08/2019'),
  no_of_person: (2), cost: (2000)},
  { Booked_by: new User('dhoni'),
  establishment: new Establishment('hyderabad', 4, 5000),
  Check_in_date: new Date('07/07/2019'), check_out_date: new Date('07/10/2019'),
  no_of_person: (2), cost: 3000},
  { Booked_by: new User('raina'),
  establishment: new Establishment('mysore', 2, 2500),
  Check_in_date: new Date('06/25/2019'), check_out_date: new Date('06/28/2019'),
 no_of_person: (4), cost: (4000)},
  { Booked_by: new User('bravo'),
  establishment: new Establishment('chennai', 5, 7500),
  Check_in_date: new Date('05/18/2019'), check_out_date: new Date('05/22/2019'),
  no_of_person: (2), cost: (5000)},
  ];
getMyHistory() {
  return of(this.bookinghistory);
}


}
