import { Component, OnInit } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-courousel',
  templateUrl: './courousel.component.html',
  styleUrls: ['./courousel.component.css']
})
export class CourouselComponent implements OnInit {
  planImage: string | ArrayBuffer | null = null;
  imgdata: any = {
    images: ''
  };
  storedImages: any[] = [];

  constructor(private imageUploadService: ImageUploadService) {}

  ngOnInit(): void {
    this.getImages();
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
}
