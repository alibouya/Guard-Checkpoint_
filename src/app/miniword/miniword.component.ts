import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniWordComponent implements OnInit {
  color ='blue';
  font='Verdana';
  size= 35;
  constructor() { }

  ngOnInit(): void {
  }

}
