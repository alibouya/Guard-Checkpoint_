import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from './model';
const API_LINK='https://immense-citadel-91115.herokuapp.com/api/personnes';

@Injectable({
  providedIn: 'root'
})
export class CvService {
private personnes:Personne[];
nbClick=0;
clickSubject=new Subject<number>();
SelectItemSubject=new Subject<Personne>()
  Http: any;
  constructor(private http:HttpClient) { 
    this.personnes = [
       new Personne('./assets/Photo.jpg',1,'Bouyahya','Ali', 35, 6211295,'Enseignant','https://www.linkedin.com/in/ali-bouyahya-49839b5a/'),
        new Personne('./assets/zeneddine.jpg',2,'zeneddine','zidene', 50, 6000295,'Joueur','https://www.linkedin.com/in/zinedine-zidane-a49711195/?originalSubdomain=mx') ,  
      
       ]
  }
  // getPersonne (): Personne[]{
  //  return this.personnes;
  // }
  getFakePersonne (): Personne[]{
    return this.personnes;
   }
   getPersonne (): Observable<Personne[]>{
    return this.http.get<Personne[]>(API_LINK)   }
  getPersonneById(id):Personne{
    return this.personnes.find((personne)=>
      personne.id===+id
    );
    
  }

  getFakePersonneById(id):Personne{
    return this.personnes.find((personne)=>
      personne.id===+id
    );}

    GetPersonneById(id): Observable<Personne>{
      return this.http.get<Personne>(API_LINK + id);
      
      
    }
// const API_LINK="http://localhost:4200/cv/1"
//   GetPersonneById(id):Observable<Personne>{
// const headers=new HttpHeaders().set('Authorization','Ali')
//    return this.Http.get<Personne>(this.API_LINK+id,{headers})
//   }
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
