import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component'
import { FilterhotelComponent } from './Bookings/filterhotel/filterhotel.component';
import {BookingListComponent } from './Bookings/booking-list/booking-list.component';
import { BookingItemComponent } from './Bookings/booking-item/booking-item.component'
const routes: Routes = [
  // { path: '', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'filterhotel',component:FilterhotelComponent},
  {path:'booking',component:BookingListComponent}, 
  { path: 'signin', component: SignInComponent, pathMatch: 'full' },
  { path: '',redirectTo:"/signin",pathMatch: 'full'}

   ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}