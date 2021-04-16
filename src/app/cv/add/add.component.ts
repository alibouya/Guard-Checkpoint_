import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model';
import { NgForm } from '@angular/forms'
import { CvService } from 'src/app/cv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private Cvservice: CvService, private router: Router) { }
  imgURL: any = '';

  imagename = '';
  ngOnInit(): void {
  }
  addPersonne(personne: Personne) {

    this.Cvservice.addPersonne(personne).subscribe((success) => {
      console.log(success);
      const LINK = ['cv']

      this.router.navigate(LINK);

    },
      (erreur) => console.log(erreur)

    );
  }
  preview(value) {

    console.log(value)
    // this.imagename=this.var1.concat(value.substring(12));
    //.toString();
    var reader = new FileReader();
    this.imagename = value;
    reader.readAsDataURL(value[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      console.log(this.imgURL)


    }
  }
}