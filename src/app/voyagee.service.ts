import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Voyage } from './voyage';
import {HttpClient} from '@angular/common/http';
const URL ='http://localhost:3000/lesVoyages'
@Injectable({
  providedIn: 'root'
})
export class VoyageeService {


constructor(private http:HttpClient) { }

 getVoyage():Observable<Voyage[]>{
  return this.http.get<Voyage[]>(URL);
}
 getVoyageById(id:number):Observable<Voyage[]>{
  return this.http.get<Voyage[]>(URL+"/"+id);
}

ajouterVoyage(v:Voyage): Observable<Voyage>{
return this.http.post<Voyage>(URL , v);
}
effacerVoyage(id:number ){
  return this.http.delete(URL+"/"+id);
}

 modifierVoyage(id:number,v:Voyage):Observable<Voyage>{
  return this.http.put<Voyage>(URL+"/"+ id,v);  
}
recherche(s:string): Observable<Voyage[]>{
  return this.http.get<Voyage[]>(URL+"?libelle="+s);

}

}
