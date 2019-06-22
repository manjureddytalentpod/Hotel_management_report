import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { FilterhotelComponent } from './Bookings/filterhotel/filterhotel.component';
import {BookingListComponent } from './Bookings/booking-list/booking-list.component';
import { BookingItemComponent } from './Bookings/booking-item/booking-item.component';
import { SearchComponent } from './Bookings/search/search.component';
import {BookingHotelComponent } from './Bookings/booking-hotel/booking-hotel.component';
import {EditProfileComponent} from './Bookings/edit-profile/edit-profile.component';
import {ShowProfileComponent } from './Bookings/show-profile/show-profile.component';
import { MybookingComponent } from './Bookings/mybooking/mybooking.component';
const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'filterhotel', component: FilterhotelComponent},
  {path: 'booking', component: BookingListComponent},
  { path: 'signin', component: SignInComponent, pathMatch: 'full' },
  {path: 'search', component: SearchComponent },
  {path: 'booknow/:id', component: BookingHotelComponent},
  {path: 'EditProfile', component: EditProfileComponent},
  {path: 'ShowProfile', component: ShowProfileComponent},
  {path: 'mybookings', component: MybookingComponent},
  { path: '', redirectTo: '/signin', pathMatch: 'full'},


   ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
