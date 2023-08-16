import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TravelplansComponent } from './travelplans/travelplans.component';
import { CourouselComponent } from './courousel/courousel.component';
import { BookingComponent } from './booking/booking.component';
import { GeneratepdfComponent } from './generatepdf/generatepdf.component';
import { authGuard } from './guard/auth.guard';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AgentpanelComponent } from './agentpanel/agentpanel.component';


const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'/login'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,canActivate: [authGuard] },
  { path: 'contactus', component: ContactusComponent},
  { path: 'Feedback', component: FeedbackComponent},
  { path: 'plans', component:TravelplansComponent},
  {path:'gallery', component:CourouselComponent},
  { path: 'booknow/:tourId', component: BookingComponent },
  {path:'generatepdf', component: GeneratepdfComponent},
  {path:'adminpanel', component:AdminpanelComponent,canActivate: [authGuard] },
  {path: 'traveller', component:AgentpanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
