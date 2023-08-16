import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupForm: FormGroup;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,private router:Router) {
    this.signupForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
 

    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  logins() {
    this.userService.login(this.loginuser).subscribe(
      (res: any) => {
        
        const userId = res.userId;
        const token = res.token;
        sessionStorage.setItem('userId', userId.toString());

        localStorage.setItem('token', token);

        console.log("success", res);
      },
      (error) => {
        
        console.error(error);
      }
    );
  }

  reguser:any={
    userName: '',
    userEmail: "",
    country: "",
    state: "",
    city: "",
    userPhone: "",
    userPassword: "",
    role: "",
    approvalStatus: false
  }
  loginuser:any={
    userEmail:'',
    userPassword:''
  }
  signup(){
    this.userService.signUp(this.reguser).subscribe((res)=>{
      console.log("success")
    })
  }
  login(){
    this.userService.login(this.loginuser).subscribe((res)=>
    
    {
      localStorage.setItem('token',res.token)
      localStorage.setItem('userId',res.user.userId)
      console.log("success",res)
      if(res.user.role=='Traveller'){
        this.router.navigate(['home'])

      }

      if(res.user.role=='admin'){
        this.router.navigate(['adminpanel'])
        
      }
      if(res.user.role=='TravelAgency'){
        this.router.navigate(['traveller'])
      }
    })
  }
  
}