import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { BookingItemComponent } from './Bookings/booking-item/booking-item.component';
import 'hammerjs';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterhotelComponent } from './Bookings/filterhotel/filterhotel.component';
import { SearchhotelComponent } from './Bookings/searchhotel/searchhotel.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingHotelComponent } from './Bookings/booking-hotel/booking-hotel.component';
import { BookingListComponent } from './Bookings/booking-list/booking-list.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './Bookings/search/search.component';
import { HeaderComponent } from './Bookings/header/header.component';
import { EditProfileComponent } from './Bookings/edit-profile/edit-profile.component';
import { ShowProfileComponent } from './Bookings/show-profile/show-profile.component';
import { MybookingComponent } from './Bookings/mybooking/mybooking.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    FilterhotelComponent,
    SearchhotelComponent,
    BookingHotelComponent,
    BookingListComponent,
    BookingItemComponent,
    SearchComponent,
    HeaderComponent,
    EditProfileComponent,
    ShowProfileComponent,
    MybookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule, HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
