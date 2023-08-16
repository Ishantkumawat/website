import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private router: Router) { }
  tour:any={}
  ngOnInit() {
    const storedTourId = sessionStorage.getItem('tourId');

    this.http.get(`https://localhost:7202/api/Tours/${storedTourId}`).subscribe((data)=>{
      this.tour=data
    })

    let userId=localStorage.getItem('userId')

    this.bookingForm = this.formBuilder.group({
      tourId: [storedTourId ? parseInt(storedTourId, 10) : null, Validators.required],
      userId: [userId, Validators.required],
      no_Of_Persons: [0, Validators.min(0)],
      price: 1 ,
    });
  }
  getUserIDFromStorage(): string | null {
    return sessionStorage.getItem('userId');
  }

  onSubmit() {
    if (this.bookingForm.invalid) {
      return;
    }
    const bookingData = this.bookingForm.value;
    console.log(this.tour.PackagePrice)
    console.log(bookingData)
    this.http.post('https://localhost:7202/api/BookingControllers', bookingData)
      .subscribe(
        (response) => {
          
          console.log(response);

          this.router.navigate(['/generatepdf']);
        },
        (error) => {
          
          console.error(error);
        }
        
      );
      
  }
  

}
