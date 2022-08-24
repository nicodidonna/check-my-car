import { Injectable } from '@angular/core';
import { Assicurazione } from '../class/AssicurazioneClass';

@Injectable({
  providedIn: 'root'
})
export class AssicurazioneServiceService {

  listaAssicurazioni : Array<Assicurazione> = [];

  constructor() { }

  getAssicurazioni(){
    return this.listaAssicurazioni;
  }

  aggiungiAssicurazione(assicurazione){
    this.listaAssicurazioni.push(assicurazione);
  }

  assicurazioneFilter(targa){
    return this.getAssicurazioni().filter(
     (assicurazione) => {assicurazione.auto.targa == targa});
    }
}
