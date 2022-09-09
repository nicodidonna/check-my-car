import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tagliando } from '../class/TagliandoClass';

@Injectable({
  providedIn: 'root'
})
export class TagliandoServiceService {

  listaTagliandi: Array<Tagliando> = [];

  constructor(private database : AngularFirestore) { }

  getTagliandi(){
    return this.listaTagliandi;
  }

  aggiungiTagliando(tagliando){
    this.listaTagliandi.push(tagliando);
    return this.database.collection('Tagliandi').add(JSON.parse(JSON.stringify(tagliando))).then(res=>{},err=>{});
  }

  tagliandiFilter(targa){
     return this.getTagliandi().filter(
      (tagliando) => {tagliando.auto.targa == targa});
  }
}
