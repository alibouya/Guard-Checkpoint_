import { Component, OnInit } from '@angular/core';
import { CvService } from './cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private Cvservice:CvService){

  }
  title = 'services';
  nbClick:number;

  ngOnInit(){
    this.Cvservice.clickSubject.subscribe(()=>{
      this.nbClick=this.nbClick;
      console.log(this.nbClick)
    })

  }

}
