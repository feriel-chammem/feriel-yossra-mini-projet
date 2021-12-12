import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Voyage } from '../voyage';
import { VoyageeService } from '../voyagee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  [x: string]: any;
 lesVoyages:Voyage[]=[];


voyageForm:FormGroup;
constructor(private voyageservice:VoyageeService,
  private formBuilder:FormBuilder ){}
  
 ajouter(){
  this.voyageservice.ajouterVoyage(this.voyageForm.value)
  .subscribe(data=>{console.log(data)
  });}
  
   supprimer(id:number){
    this.voyageservice.effacerVoyage(id).subscribe();
 }


//  supprimer(id:number){
//     this.voyageservice.effacerVoyage(id);
//   }

  modifier(id:number){
  this.voyageService.modifierVoyage(id).subscribe(this.voyageService.getVoyage);

 }

  ngOnInit(): void {
     this.voyageservice.getVoyage().subscribe(data=>this.lesVoyages=data);
     this.voyageForm=this.formBuilder.group({
 id:[0],
 libelle:[''],
 photo:[''],
 prix:[0],
 promotion:[],
 datedepart:[new Date()],
 datearrive:[new Date()],
 datepaiement:[new Date()],
 destination:[''],
 nbjours:[],

     })
 
  }

}
