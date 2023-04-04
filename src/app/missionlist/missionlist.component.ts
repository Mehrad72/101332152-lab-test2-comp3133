import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MissionService } from '../network.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: any;
  year = '';
  currentFlightNumber: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.launches = data;
      console.log(this.launches)
    });
  }
  searchMission() {
    this.http
    .get(`https://api.spacexdata.com/v3/launches?launch_year=${this.year}`)
    .subscribe((data: any) => {
      this.launches = data;
    });
} 
  
}