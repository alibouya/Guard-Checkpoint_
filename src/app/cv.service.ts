import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from './model';
const API_LINK='https://immense-citadel-91115.herokuapp.com/api/personnes/1219';

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
       new Personne(1,'Bouyahya','Ali', 35, 6211295,'Enseignant','./assets/Photo.jpg'),
        new Personne(2,'zeneddine','zidene', 50, 6000295,'Joueur','./assets/zeneddine.jpg')   
      
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
      const headers=new HttpHeaders().set('Authorization','aymen');
      const params = new HttpParams().set('code acces','123456789').set('age','37');
      return this.http.get<Personne>(API_LINK + id,{headers,params});
      
      
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
  addFakePersonne(personne:Personne){
    const id = this.personnes[this.personnes.length - 1].id;
    personne.id= id +1;
    this.personnes.push(personne);
    console.log(this.personnes)
  }

  addPersonne(personne:Personne){
    const token=localStorage.getItem('token');
    if(token){

      const headers=new HttpHeaders().set('Authorization','token');
    return this.http.post(API_LINK, personne,{headers});
    }
    return this.http.post(API_LINK, personne);
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
