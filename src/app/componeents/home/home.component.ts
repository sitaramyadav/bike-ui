import { Component, OnInit } from '@angular/core';
import { BikeService} from '../../services/bike.service';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade',
  ];

  bikeform: FormGroup;
  validMessage = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit() {
    this.bikeform = FormGroup({
      name: FormControl( '' , Validators.required ),
      email: FormControl( '' , Validators.required ),
      phone: FormControl('' , Validators.required ),
      model: FormControl('' , Validators.required ),
      serialNumber: FormControl('', Validators.required ),
      purchasePrice: FormControl('', Validators.required ),
      purchaseDate: FormControl('', Validators.required ),
      contact: new FormControl()

    });
  }

  submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = 'Your bike registration has been submited! Thank you';
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          return true;
        },
        error1 => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
    return this.http.post(this.bikeform);
  }
}
