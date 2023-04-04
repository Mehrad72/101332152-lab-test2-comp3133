import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './models/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getMission(flightNumber: number): Observable<Mission> {
    const url = `${this.apiUrl}/${flightNumber}`;
    return this.http.get<Mission>(url);
  }
}
