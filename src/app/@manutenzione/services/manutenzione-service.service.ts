import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ManutenzioneStraordinaria } from '../class/ManutenzioneClass';

@Injectable({
  providedIn: 'root'
})
export class ManutenzioneServiceService {

  listaManutenzioni : Array<ManutenzioneStraordinaria> = []

  constructor(private database : AngularFirestore) { }

  getManutenzioni(idAuto){
    return this.database.collection("Auto/"+idAuto+"/manutenzioni").valueChanges({ idField: 'id' })
  }

  aggiungiManutenzione(manutenzione, idAuto){
    this.database.collection('Auto').doc(idAuto).collection('manutenzioni').add(JSON.parse(JSON.stringify(manutenzione))).then(res=>{},err=>{});
    setTimeout(()=>{window.location.reload()},2000);
  }

  rimuoviManutenzione(idManutenzione, idAuto){
    return this.database.collection('Auto').doc(idAuto).collection('manutenzioni').doc(idManutenzione).delete()
  }
  
}
