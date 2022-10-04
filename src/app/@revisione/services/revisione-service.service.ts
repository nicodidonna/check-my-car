import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Revisione } from '../class/RevisioneClass';

@Injectable({
  providedIn: 'root'
})
export class RevisioneServiceService {

  listaRevisioni : Array<Revisione> = [];

  constructor(private database : AngularFirestore) { }

  getRevisioni(idAuto){
    return this.database.collection("Auto/"+idAuto+"/revisioni").valueChanges({ idField: 'id' })
  }

  aggiungiRevisione(revisione, idAuto){
    this.database.collection('Auto').doc(idAuto).collection('revisioni').add(JSON.parse(JSON.stringify(revisione))).then(res=>{},err=>{});
    setTimeout(()=>{window.location.reload()},2000);
  }

  getProssimaRevisione(dataRevisione){
    let anno = dataRevisione.getFullYear();
    let mese = dataRevisione.getMonth();
    let giorno = dataRevisione.getDate();
    let nuovaData = new Date(anno + 2, mese, giorno);
    return nuovaData;
  }
}
