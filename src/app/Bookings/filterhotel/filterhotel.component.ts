import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../../services/establishment.service';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
@Component({
  selector: 'app-filterhotel',
  templateUrl: './filterhotel.component.html',
  styleUrls: ['./filterhotel.component.css']
})
export class FilterhotelComponent implements OnInit {
  constructor(private establishmentService: EstablishmentService, private formbuilder: FormBuilder) { }
  getValues: FormGroup;
  ratings: number;
  ngOnInit() {
      this.getValues =  this.formbuilder.group({
        sliderValue: [1000],
        search: [''],
        hotel: [true, [Validators.required]],
        homestay: [true, [Validators.required]],
        ratings: [1],
      }) ;
     this.getValues.valueChanges.subscribe(formdata => {
     this.establishmentService.getFilteredValues(formdata);
    });
  }
  getRatings(val: number) {
     this.getValues.get('ratings').setValue(val);
  }
}
