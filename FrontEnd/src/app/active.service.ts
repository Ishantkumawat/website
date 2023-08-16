import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor() { }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }}
