import {Component, OnInit} from '@angular/core';
import {BikeService} from '../../services/bike.service';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  constructor(private bikeService: BikeService) {
  }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {
        console.log('aya kuch to');
        this.bikes = data;
      },
      err => console.error(err),
      () => console.log('bikes loaded')
    );
  }

}
