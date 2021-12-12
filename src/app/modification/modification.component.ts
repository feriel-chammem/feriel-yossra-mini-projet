import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from '../voyage';
import { VoyageeService } from '../voyagee.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {

voyageForm:FormGroup=new FormGroup({});
ide:number
v:Voyage[]=[];
  constructor( private activateroute:ActivatedRoute ,private voyageservice:VoyageeService ,private formBuilder:FormBuilder) { }

   public modifier(){
     this.voyageservice.modifierVoyage(this.activateroute.snapshot.params['id'] ,this.voyageForm.value).subscribe();}
  




  ngOnInit(): void {
//     this.ide=this.activateroute.snapshot.params['id'];
//  this.voyageservice.getVoyageById(this.ide).subscribe(voyage=>this.v=voyage)
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
  nbjours:[0],
}
)
  }
    
  }


