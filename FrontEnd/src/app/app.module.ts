import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { HomeComponent } from './home/home.component'; 
import { FooterComponent } from './footer/footer.component'; 
import { TravelplansComponent } from './travelplans/travelplans.component'; 
import { FeedbackComponent } from './feedback/feedback.component'; 
import { ContactusComponent } from './contactus/contactus.component'; 
import { ProjectfooterComponent } from './projectfooter/projectfooter.component'; 
import { TrailplansComponent } from './trailplans/trailplans.component'; 
import { CourouselComponent } from './courousel/courousel.component'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component'; 
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AgentpanelComponent } from './agentpanel/agentpanel.component';
import { GeneratepdfComponent } from './generatepdf/generatepdf.component'; 
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TravelplansComponent,
    FeedbackComponent,
    ContactusComponent,
    ProjectfooterComponent,
    TrailplansComponent,
    CourouselComponent,
    BookingComponent,
    AdminpanelComponent,
    AgentpanelComponent,
    GeneratepdfComponent
    
    
   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    

  ],
  providers:[
  provideAnimations(), // required animations providers
  provideToastr(), // Toastr providers
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
