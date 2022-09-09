import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Revisione } from '../class/RevisioneClass';

@Injectable({
  providedIn: 'root'
})
export class RevisioneServiceService {

  listaRevisioni : Array<Revisione> = [];

  constructor(private database : AngularFirestore) { }

  getRevisioni(){
    return this.listaRevisioni;
  }

  aggiungiRevisione(revisione){
    this.listaRevisioni.push(revisione);
    return this.database.collection('Revisioni').add(JSON.parse(JSON.stringify(revisione))).then(res=>{},err=>{});
  }

  revisioneFilter(targa){
      return this.getRevisioni().filter(
       (revisione) => {revisione.auto.targa == targa});
  }

  getProssimaRevisione(dataRevisione){
    let anno = dataRevisione.getFullYear();
    let mese = dataRevisione.getMonth();
    let giorno = dataRevisione.getDate();
    let nuovaData = new Date(anno + 2, mese, giorno);
    return nuovaData;
  }
}
