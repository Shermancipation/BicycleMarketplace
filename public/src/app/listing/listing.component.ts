import { Component, OnInit } from '@angular/core';
import { Bicycle } from "../bicycle";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bicycle = new Bicycle();
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {

  }

  newBicycle()
  {
    this._httpService.addBicycle(this.bicycle);
    console.log(this.bicycle);
    this.bicycle = new Bicycle();
  }


}
