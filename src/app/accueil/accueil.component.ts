import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Voyage } from '../voyage';
import { VoyageeService } from '../voyagee.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
lesvoyages:Voyage[]=[];
v1:Voyage[]=[];
  constructor(private voyageeService:VoyageeService,private router:Router) { }

onDetails(){
  this.router.navigate(['/details']);
}
rechercher(f:NgForm){
  this.voyageeService.recherche(f.value['rechercher']).subscribe(data =>this.v1 = data);
 }

  ngOnInit(): void {
    this.voyageeService.getVoyage().subscribe(data=>this.lesvoyages=data);

  }

}
