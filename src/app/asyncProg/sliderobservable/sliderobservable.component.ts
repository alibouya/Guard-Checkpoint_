import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sliderobservable',
  templateUrl: './sliderobservable.component.html',
  styleUrls: ['./sliderobservable.component.css']
})
export class SliderobservableComponent implements OnInit {
  paths=['p1.jpg','p2.jpg','p3.JPG','p4.jpg','p10.jpg',
  'p12.JPG','photo1.jpg','photo2.JPG','photo3.JPG','porte1.jpg',
  'tb1.jpg','tb2.jpg','tb3.jpg','tm1.jpg','tm2.JPG','tm3.jpg']
    path='massif.jpg';
 sliderObservable= new Observable<string>((observer)=>{
   let i=0;
   setInterval(()=>{
   if(i===this.paths.length){
     i=0;
   }else{
     observer.next(this.paths[i++]);
   }
   }, 1500)
 })
  constructor() { }

  ngOnInit(): void {
    this.sliderObservable.subscribe((path)=>{this.path=path;
    console.log(path);}

    );
  }

}
