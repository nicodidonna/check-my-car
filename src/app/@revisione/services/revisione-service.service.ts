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
       (tagliando) => {tagliando.auto.targa == targa});
  }
}
