import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';
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
  public perss:Personne[];



  constructor(private Cvservice:CvService,private embaucheService :EmbaucheService,private router :Router) { 
    this.perss=this.Cvservice.getPersonne();
    console.log(this.perss);
  }

  ngOnInit(): void {
    
   
  }
  
  embaucher(){
    this.embaucheService.embaucher(this.pers1);
    }
    
    // this.per1=new Personne(this.person2);
    
    goTodetails(){
      const LINK=['cv', this.personne.id]

this.router.navigate(LINK);
    }
  
}
