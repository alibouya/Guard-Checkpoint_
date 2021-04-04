import { Component, Input, OnInit } from '@angular/core';
import { EmbaucheService } from '../embauche.service';
import { Personne } from '../model';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  @Input() public personne : Personne ;

  embauchees: Personne[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.embauchees=this.embaucheService.getEmbaushess();
    console.log(this.embauchees)
  }

}
