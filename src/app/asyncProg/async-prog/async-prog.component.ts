import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-prog',
  templateUrl: './async-prog.component.html',
  styleUrls: ['./async-prog.component.css']
})
export class AsyncProgComponent implements OnInit {
  promesse= new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(`cc je suis asynch`);
      }, 2000);
  })
  constructor() { }

  ngOnInit(): void {
    this.promesse.then(
      (message)=>{
        console.log("je gère la resolve de la promesse");

        console.log(message);
      }
    )
  }
asynctreatement(){
 
  console.log(`cc je suis asynch`);

}
}
