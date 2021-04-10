
import { Component, OnInit, Output ,EventEmitter, SecurityContext, Input} from '@angular/core';
import { PersonneService } from '../personne.service';
import{Personne} from '.././model'
import { CvService } from '../cv.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  

  @Input() public personne : Personne ;
  //@Output() selectpersonne = new EventEmitter();
  constructor(private Cvservice:CvService){
  }
  
  senddetailtolist(  )
  {
    console.log('je clcik sur le item');
    //this.pers[0]=this.Perso1
  //  this.selectpersonne.emit(this.personne);
  this.Cvservice.clickOnItem(this.personne);


  }
  
  
  ngOnInit(): void {

  }
  setdetailscandidate1(){
   
  }
  setdetailscandidate2(){
   /* this.personne2.id=2;
    this.personne2.name='Sassi';
    this.personne2.firstname='Ameur';
    this.personne2.age=36;
    this.personne2.cin=6211255;
    this.personne2.job='teacher';
    this.personne2.path='https://www.linkedin.com/in/ameur-sassi-54774b1a1/';*/
  }

}