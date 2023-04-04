import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../network.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() flightNumber!: string;
  missionDetails: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const apiUrl = `https://api.spacexdata.com/v3/launches/${this.flightNumber}`; 
      this.http.get(apiUrl).subscribe((data) => {
      this.missionDetails = data;
    });
  }

}
