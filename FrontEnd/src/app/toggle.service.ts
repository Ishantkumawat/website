
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class ToggleService {

private apiUrl='https://localhost:7202/api/Admin/'



private apiUrlz = 'https://localhost:7202/api/User';
  constructor(private http: HttpClient) { }

  updateUserApprovalStatus(userId: number, approvalStatus: boolean): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${userId}/ToggleApproval`, { ApprovalStatus: approvalStatus });
  }


  
  getTravelAgents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrlz}/travelagents`);
  }
}
