import { Vetements } from './models/vetements.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FlaskapiService {

  constructor(private httpClient: HttpClient) { }

  public server: string = 'http://127.0.0.1:5000/api';

  public getVetements(){
     return this.httpClient.get<Vetements>(this.server + 'vetement');
  }

public getVetement(vet_id: string){
  return this.httpClient.get<Vetements>(this.server + 'vetement/${vet_id}');
}

 public addVetement(vetObjet: Vetements, photo: any){
       console.log(vetObjet);
 }

 public remove_vet(vet_id: string){
   return this.httpClient.delete<Vetements>(this.server + 'vetement/${vet_id}')
 }
}
