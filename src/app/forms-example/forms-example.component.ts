import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.css']
})
export class FormsExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  processForm(monFormulaire:NgForm){
   console.log(monFormulaire);
  }

  showInput(monPremierInput){
    console.log(monPremierInput);

  }
}
