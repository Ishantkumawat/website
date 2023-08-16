import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor( private router:Router, private toast: ToastrService) { }
  canActivate() {
    if (localStorage.getItem('token'))
      return true;
    else {
      this.toast.error('Error', 'Please Login first');
      this.router.navigate(['login']);
      return false;


    }
  }

}
