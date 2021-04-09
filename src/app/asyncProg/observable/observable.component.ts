import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  monObservable= new Observable<number>(
  (observer)=>{
    let i=5;
    setInterval(()=>{
      if(!i){
        observer.complete();
      }
      observer.next(i--);
    }, 1000);
  }
  );
  constructor() { }

  ngOnInit(): void {
    this.monObservable.pipe(
      map((data)=>data*3),
      filter((data)=>data%2!==0),
      
    ).subscribe(
      (data)=>{
        console.log('Je suis l\'observateur ', data);
      },
      (error)=>{
        console.log(error);
      },
      ()=> console.log("boom")
    );

    this.monObservable.subscribe(
      (data)=>{
        console.log('Je suis l\'observateur 2 : '+ data*2);
      }
    )
  }

}
