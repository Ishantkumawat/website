import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-generatepdf',
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.css']
})
export class GeneratepdfComponent {
  
  userId: number = 0; 
  pdfContent: SafeHtml | undefined;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
    }
  }

  generate() {
    console.log('UserId:', this.userId);

    const userIdParam = encodeURIComponent(this.userId.toString());
    const url = `https://localhost:7202/api/BookingControllers/GeneratePDF?UserId=${userIdParam}`;

    this.http.get(url, { responseType: 'arraybuffer' }).subscribe(
      (response: ArrayBuffer) => {
        this.downloadPDF(response);
        this.userId = 0; 
      },
      (error) => {
        console.error('Error generating PDF:', error);
      }
    );
  }

  downloadPDF(buffer: ArrayBuffer) {
    const blob = new Blob([buffer], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'generated.pdf';
    link.click();
    window.URL.revokeObjectURL(link.href); 
  }
}