import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToggleService } from '../toggle.service';
import { ImageUploadService } from '../image-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {






  planImage: string | ArrayBuffer | null = null;
  imgdata: any = {
    images: ''
  };


  travelAgents: any[] = [];

  storedImages: any[] = [];

  userId!: number;
  approvalStatus!: boolean;

  constructor(private ToggleService: ToggleService,private imageUploadService: ImageUploadService,private router:Router) { }
  ngOnInit(): void {
    this.getImages();
    this.fetchTravelAgents();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = fileReader.result as ArrayBuffer;
      const byteArray = new Uint8Array(fileData);
      const numbersArray = Array.from(byteArray);
      const base64String = btoa(String.fromCharCode.apply(null, numbersArray));
      this.imgdata.images = base64String;
    };
    fileReader.readAsArrayBuffer(file);
  }

  addImg() {
    this.imageUploadService.uploadImage(this.imgdata).subscribe((data) => {
      console.log(data);
      this.getImages(); 
    });
  }

  getImages() {
    this.imageUploadService.getStoredImages().subscribe(
      (data: any) => {
        if (data && data.length > 0) {
          this.storedImages =data;
        }
      },
      (error) => {
        console.log('Error fetching stored images:', error);
      }
    );
    }

  onToggleApproval() {
    if (!this.userId) {
      console.error('Please enter a valid userId.');
      return;
    }

    this.approvalStatus = !this.approvalStatus;
    this.ToggleService.updateUserApprovalStatus(this.userId, this.approvalStatus)
      .subscribe(
        () => console.log('Approval status updated successfully'),
        error => console.error('Error updating approval status:', error)
      );
  }



  fetchTravelAgents(): void {
    this.ToggleService.getTravelAgents().subscribe(
      (data: any) => {
        this.travelAgents = data;
      },
      error => {
        console.error('Error fetching travel agents:', error);
      }
    );
}
}
