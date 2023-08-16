import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Traveller } from '../traveller.model';
import { PosttourService } from '../posttour.service';


@Component({
  selector: 'app-agentpanel',
  templateUrl: './agentpanel.component.html',
  styleUrls: ['./agentpanel.component.css']
})
export class AgentpanelComponent implements  OnInit {
  travellerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private PosttourService: PosttourService
  ) {}

  ngOnInit() {
    // Initialize the form for updating traveller data
    this.travellerForm = this.formBuilder.group({
      travellerId: ['', Validators.required], // Traveller ID input field
      travellerName: ['', Validators.required],
      travellerEmail: ['', [Validators.required, Validators.email]],
      travellerState: [''],
      travellerCity: [''],
      travellerPhone: ['', Validators.required],
      travellerPassword: ['', Validators.required]
    });
  }

  onUpdate() {
    if (this.travellerForm.invalid) {
      return;
    }

    const travellerId = this.travellerForm.get('travellerId')!.value; // Get the traveller ID from the form

    const updatedTraveller: Traveller = this.travellerForm.value;
    this.PosttourService.updateTraveller(travellerId, updatedTraveller).subscribe(
      (response) => {
        console.log('Traveller updated successfully:', response);
        // Reset the form after successful update
        this.travellerForm.reset();
      },
      (error) => {
        console.error('Error updating traveller:', error);
      }
    );
  }
}