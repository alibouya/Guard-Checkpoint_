import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public authenticationservice: AuthenticationService, public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authenticationservice.logout();
    this.router.navigate(['login'])
  }
}
