import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from './model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personnes:Personne[];
nbClick=0;
clickSubject=new Subject<number>();
SelectItemSubject=new Subject<Personne>()
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
    return this.personnes.find((personne)=>
      personne.id===+id
    );
  }
  deletePersonne(personne : Personne){
  const index = this.personnes.indexOf(personne);
  if(index===-1){
    alert(`this person does not exist`)
    return 0;

  }else {
    this.personnes.splice(index, 1);
    return 1;
  }
  }
  addPersonne(personne:Personne){
    const id = this.personnes[this.personnes.length - 1].id;
    personne.id= id +1;
    this.personnes.push(personne);
    console.log(this.personnes)
  }
  click(){
    this.nbClick ++;
    this.clickSubject.next(this.nbClick);
  }
  clickOnItem(personne:Personne){
    console.log('je vais dispatch cette méthode à travers le méthode next');
   this.SelectItemSubject.next(personne)
  }
}
