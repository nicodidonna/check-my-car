import { Injectable } from '@angular/core';
import { Revisione } from '../class/RevisioneClass';

@Injectable({
  providedIn: 'root'
})
export class RevisioneServiceService {

  listaRevisioni : Array<Revisione> = [];

  constructor() { }

  getRevisioni(){
    return this.listaRevisioni;
  }

  aggiungiRevisione(revisione){
    this.listaRevisioni.push(revisione);
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
