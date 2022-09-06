import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auto } from '../class/AutoClass';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  listaAuto : Array<Auto>=[];

  constructor(private database : AngularFirestore) { }

  getAuto(){
    return this.listaAuto;
  }

  aggiungiAuto(auto){
    this.listaAuto.push(auto);
  }

  rimuoviAuto(indiceAuto){
    this.listaAuto.splice(indiceAuto,1);
  }

}


