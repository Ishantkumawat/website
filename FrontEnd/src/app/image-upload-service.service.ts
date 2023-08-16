import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private apiUrl = 'https://localhost:7202/api/Admin/upload'; 

  constructor(private http: HttpClient) {}

  uploadImage(imageData: string): Promise<any> {
    const payload = { image: imageData };
    return this.http.post(this.apiUrl, payload).toPromise();
  }
}
