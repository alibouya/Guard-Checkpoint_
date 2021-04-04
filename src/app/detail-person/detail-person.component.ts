import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import { Personne } from '../model';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
  personne : Personne =new Personne();
  constructor(private activatedRoute: ActivatedRoute,
     private cvservice:CvService,
     private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{

    this.personne=this.cvservice.getPersonneById(params.id);
    console.log(this.personne)
    // if(!this.personne){
    //   const LINK= ['cv'];
    //   this.router.navigate(LINK);

    // }
    })
  }

}
