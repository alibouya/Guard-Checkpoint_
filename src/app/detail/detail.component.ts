import { Component, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model';
import { PersonneService } from '../personne.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 @Input() personne;
 @Input() pers1 ;
  public perss:Personne;


  constructor() { 
    this.perss=this.pers1;
    console.log(this.perss);
    console.log(this.personne);
  }

  ngOnInit(): void {
    
   
  }
  
  
    
    // this.per1=new Personne(this.person2);
    
    
  
}
