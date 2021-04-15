import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const API_LINK='https://jsonplaceholder.typicode.com/users';
const API_LINK1='https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
   th:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   this.http.get(API_LINK).subscribe((datas)=> console.log(datas)),(errors)=>console.log(errors)
  }
postTestApi(){
  const  newPost={
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

  this.http.post(API_LINK1,newPost).subscribe((response)=>{
   console.log(response);
  })
}
}
