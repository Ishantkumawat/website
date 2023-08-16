import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private baseUrl = 'https://localhost:7202/api/Admin';

  constructor(private http: HttpClient) { }

  getStoredImages(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/GetStoredImage`);
  }

 
  uploadImage(imageData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/upload`, imageData);
  }
}
