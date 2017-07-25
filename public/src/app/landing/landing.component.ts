import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  regUser = new User();
  logUser = new User();

  constructor(private _httpService: HttpService, private router: Router) 
  {
    
  }

  ngOnInit() 
  {
    this._httpService.getSession()
    .then(user => {console.log("The session should print here:" + user.id)})
    .catch(err => {console.log("Session find errors should print here: " + err)})
  }

  register()
  {
    this._httpService.addUser(this.regUser);
    this.regUser = new User();
  }

  login()
  {
    console.log("Login function firing...")
    console.log(this.logUser);
    this._httpService.findUser(this.logUser);
    this.router.navigate(['/browse'])
  }

}
