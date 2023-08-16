// tour.model.ts
export interface Tour {
  TourId: number;
  TravelAgencyId: number;
  TravelAgencyName: string | null;
  TourName: string | null;
  TourCountry: string | null;
  TourState: string | null;
  TourCity: string | null;
  Itenary: string | null;
  Description: string | null;
  Type_of_package: string | null;
  PackagePrice: number;
  Extra_Person_Price: number;
  AgencyImages: string | null;
}
