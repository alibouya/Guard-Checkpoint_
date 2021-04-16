import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  constructor(private authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  login(loginForm){
    this.authenticationService.login(loginForm).subscribe(
      (data)=>{localStorage.setItem("token",data.id);
    this.router.navigate(['cv'])
    },
      (erreur)=>console.log(erreur)
      )
   // console.log(loginForm.value);
  }
}
