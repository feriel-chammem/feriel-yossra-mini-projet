import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voyage } from '../voyage';
import { VoyageeService } from '../voyagee.service';

@Component({
  selector: 'app-zonetouristique',
  templateUrl: './zonetouristique.component.html',
  styleUrls: ['./zonetouristique.component.css']
})
export class ZonetouristiqueComponent implements OnInit {
ide:number
v:Voyage[]=[];
  constructor( private activateroute:ActivatedRoute ,private voyageservice:VoyageeService) { }

  ngOnInit(): void {this.ide=this.activateroute.snapshot.params['id'];
this.voyageservice.getVoyageById(this.ide).subscribe(voyage=>this.v=voyage)
  }

}
