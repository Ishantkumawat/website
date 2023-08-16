import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedsModel } from '../feeds.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup; 
  feedbacks: FeedsModel[] = [];
  private apiUrl = 'https://localhost:44374/feedback';


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    this.getFeedbacks();
  }
  getFeedbacks() {
    this.http.get<FeedsModel[]>(this.apiUrl).subscribe(
      (data) => {
        this.feedbacks = data;
      },
      (error) => {
        console.log('Error fetching feedbacks:', error);
      }
    );
  }

  submitFeedback() {
    // Access form values using this.feedbackForm.value
    this.http.post<any>('https://localhost:44374/feedback', this.feedbackForm.value).subscribe(
      (response) => {
        console.log('Feedback submitted successfully:', response);
        // Optionally, you can show a success message to the user here.
      },
      (error) => {
        console.error('Error submitting feedback:', error);
        // Optionally, you can show an error message to the user here.
      }
    );
  }
}
