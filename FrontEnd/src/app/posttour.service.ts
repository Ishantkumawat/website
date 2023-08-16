import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traveller } from './traveller.model';
import { Tour } from './tour.model';
@Injectable({
  providedIn: 'root'
})
export class PosttourService {
  private apiUrl = 'https://localhost:7202/api/Travellers'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  addTraveller(traveller: Traveller): Observable<any> {
    return this.http.post(this.apiUrl, traveller);
  }

  updateTraveller(travellerId: number, traveller: Traveller): Observable<any> {
    const url = `${this.apiUrl}/${travellerId}`;
    return this.http.put(url, traveller);
  }
}