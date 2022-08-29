import { Injectable } from '@angular/core';
import { ManutenzioneStraordinaria } from '../class/ManutenzioneClass';

@Injectable({
  providedIn: 'root'
})
export class ManutenzioneServiceService {

  listaManutenzioni : Array<ManutenzioneStraordinaria> = []

  constructor() { }

  getManutenzioni(){
    return this.listaManutenzioni;
  }

  aggiungiManutenzione(manutenzione){
    this.listaManutenzioni.push(manutenzione);
  }

  manutenzioneFilter(targa){
    return this.getManutenzioni().filter(
      (manutenzione) => {manutenzione.auto.targa == targa});
  }
}
