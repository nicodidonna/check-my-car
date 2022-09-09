import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Assicurazione } from '../class/AssicurazioneClass';

@Injectable({
  providedIn: 'root'
})
export class AssicurazioneServiceService {

  listaAssicurazioni : Array<Assicurazione> = [];

  constructor(private database : AngularFirestore) { }

  getAssicurazioni(){
    return this.listaAssicurazioni;
  }

  aggiungiAssicurazione(assicurazione){
    this.listaAssicurazioni.push(assicurazione);
    return this.database.collection('Assicurazioni').add(JSON.parse(JSON.stringify(assicurazione))).then(res=>{},err=>{});
  }

  assicurazioneFilter(targa){
    return this.getAssicurazioni().filter(
     (assicurazione) => {assicurazione.auto.targa == targa});
    }
}
