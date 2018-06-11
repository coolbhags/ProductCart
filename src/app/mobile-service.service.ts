import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class MobileServiceService {
  // ngOnInit(): void {
  //   this.showMobiles();
  // }
  constructor(public http: Http) {}

  showMobiles() {
    return this.http
      .get('http://localhost:3000/showMobiles')
      .map((response) => response.json());
  }
}
