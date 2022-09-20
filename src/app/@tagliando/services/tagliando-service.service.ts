import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Tagliando } from '../class/TagliandoClass';

@Injectable({
  providedIn: 'root'
})
export class TagliandoServiceService {

  listaTagliandi: Array<Tagliando> = [];

  constructor(private database : AngularFirestore) { }

  getTagliandi(idAuto){
    return this.database.collection("Auto/"+idAuto+"/tagliandi").valueChanges({ idField: 'id' })
  }

  aggiungiTagliando(tagliando, idAuto){
    this.database.collection('Auto').doc(idAuto).collection('tagliandi').add(JSON.parse(JSON.stringify(tagliando))).then(res=>{},err=>{});
    setTimeout(()=>{window.location.reload()},2000);
  }

}
