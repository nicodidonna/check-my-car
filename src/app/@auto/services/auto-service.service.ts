import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auto } from '../class/AutoClass';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  listaAuto = [];

  constructor(private database : AngularFirestore) { }

  getAuto(){
     return this.listaAuto;
  }

  aggiungiAuto(auto){
    this.listaAuto.push(auto);
    return this.database.collection('Auto').add(JSON.parse(JSON.stringify(auto))).then(res=>{},err=>{});
  }

  rimuoviAuto(indiceAuto){
    this.listaAuto.splice(indiceAuto,1);
  }

}


