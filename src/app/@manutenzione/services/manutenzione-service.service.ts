import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ManutenzioneStraordinaria } from '../class/ManutenzioneClass';

@Injectable({
  providedIn: 'root'
})
export class ManutenzioneServiceService {

  listaManutenzioni : Array<ManutenzioneStraordinaria> = []

  constructor(private database : AngularFirestore) { }

  getManutenzioni(){
    return this.listaManutenzioni;
  }

  aggiungiManutenzione(manutenzione){
    this.listaManutenzioni.push(manutenzione);
    return this.database.collection('Manutenzioni Straordinarie').add(JSON.parse(JSON.stringify(manutenzione))).then(res=>{},err=>{});
  }

  manutenzioneFilter(targa){
    return this.getManutenzioni().filter(
      (manutenzione) => {manutenzione.auto.targa == targa});
  }
}
