import { Injectable } from '@angular/core';
import { Tagliando } from '../class/TagliandoClass';

@Injectable({
  providedIn: 'root'
})
export class TagliandoServiceService {

  listaTagliandi: Array<Tagliando> = [];

  constructor() { }

  getTagliandi(){
    return this.listaTagliandi;
  }

  aggiungiTagliando(tagliando){
    this.listaTagliandi.push(tagliando);
  }

  tagliandiFilter(targa){
     return this.getTagliandi().filter(
      (tagliando) => {tagliando.auto.targa == targa});
  }
}
