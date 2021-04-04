import { Injectable } from '@angular/core';
import { Personne } from './model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personnes:Personne[];
  constructor() { 
    this.personnes = [
       new Personne('./assets/Photo.jpg',1,'Bouyahya','Ali', 35, 6211295,'Enseignant','https://www.linkedin.com/in/ali-bouyahya-49839b5a/'),
        new Personne('./assets/zeneddine.jpg',2,'zeneddine','zidene', 50, 6000295,'Joueur','https://www.linkedin.com/in/zinedine-zidane-a49711195/?originalSubdomain=mx') ,  
      
       ]
  }
  getPersonne (): Personne[]{
   return this.personnes;
  }
  getPersonneById(id):Personne{
    return this.personnes.find((personne)=>{
      personne.id=== id
    });
  }
}
