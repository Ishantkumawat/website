  import { Component, OnInit } from '@angular/core';
  import { TourService } from '../tour.service';
  import { ImageConverterService } from '../image-converter.service';
  import { HttpClient } from '@angular/common/http';
  import { Tour } from '../tour.model';
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-travelplans',
    templateUrl: './travelplans.component.html',
    styleUrls: ['./travelplans.component.css']
  })
  export class TravelplansComponent implements OnInit {
    searchKeyword!: string;
    filteredTours: any[] = [];



    tours: any[] = [];
    apiUrl = 'https://localhost:7202/api/Tours'; 

    constructor(
      private tourService: TourService,
      private imageConverterService: ImageConverterService,
      private http: HttpClient,
      private router: Router
    ) {}

    

    ngOnInit() {
      this.tourService.getTours().subscribe((data) => {
        this.tours = data;
        this.convertToImageUrlForEachTour();
      });
    }

    convertToImageUrlForEachTour() {
      this.tours.forEach((tour) => {
        if (tour.agencyImages) {
          tour.agencyImages = this.imageConverterService.byteArrayToImageUrl(tour.agencyImages);
        }
      });
    }

    getImage(id: number) {
      return this.http.get(`${this.apiUrl}/${id}`, { responseType: 'blob' });
    }


    bookNow(tourId: number) {
      console.log(tourId);
      sessionStorage.setItem('tourId', tourId.toString());
    
      this.router.navigate(['/booknow', tourId]);
    }
    

    
    searchTours() {
      if (this.searchKeyword) {
        this.tourService.searchToursByTourName(this.searchKeyword)
          .subscribe(
            (tours: any[]) => {
              this.filteredTours = tours;
            },
            error => {
              console.error('Error searching tours:', error);
            }
          );
      } else {
        this.filteredTours = [];
      }
    }

  }
