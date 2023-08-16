import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { UserLogin } from './user.login';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7202/api/User/Register';
  private apisUrl='https://localhost:7202/api/Token'
  router: any;
  constructor(private http: HttpClient) {}

 
  signUp(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  login(userLogin: any): Observable<any> {
    const loginUrl = `${this.apisUrl}`; 
    console.log(loginUrl)
    return this.http.post(loginUrl, userLogin);
  }
  getToken() {
    return localStorage.getItem('token')
  }
  signout() {
    localStorage.clear();
    this.router.navigate(['home']); 
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  
}
