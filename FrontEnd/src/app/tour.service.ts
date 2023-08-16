import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from './tour.model'; 

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private apiUrl = 'https://localhost:7202/api/Tours';
  private apiUrlz = 'https://localhost:7202/api/Linq';

  constructor(private http: HttpClient) { }
    
  getTours(): Observable<any> {
    
    return this.http.get<any>(this.apiUrl);
    
  }
  searchToursByTourName(tourname: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlz}/filter?tourname=${tourname}`);
  }
}
