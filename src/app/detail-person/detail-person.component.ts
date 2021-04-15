import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../cv.service';
import { Personne } from '../model';
const LINK= ['cv'];

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
    console.log(params);
   this.cvservice.GetPersonneById(params.id).subscribe((personne)=>
     this.personne=personne,(error)=>       this.router.navigate(LINK)

   )
    
    } 
  );
}

  deletePersonne(){
   if(this.cvservice.deletePersonne(this.personne)) {
     this.router.navigate(LINK)
   }
  }
}
