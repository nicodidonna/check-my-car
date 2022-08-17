import { Injectable } from '@angular/core';
import { Tagliando } from '../class/TagliandoClass';

@Injectable({
  providedIn: 'root'
})
export class TagliandoServiceService {

  listaTagliandi: Array<Tagliando> = [];

  constructor() { }

  aggiungiTagliando(tagliando){
    this.listaTagliandi.push(tagliando);
  }
}
