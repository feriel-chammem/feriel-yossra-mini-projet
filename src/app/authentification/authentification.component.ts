import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(private router:Router) { }
   onSubmit(f:NgForm) { 
//  if(f.value['password']!==1234){
//    alert("erreur");
//  }
//  else {
 this.router.navigate(['/details']);
 }


  ngOnInit(): void {
  
  }
  
}
