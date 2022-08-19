import { Injectable } from '@angular/core';
import { Auto } from '../class/AutoClass';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  listaAuto : Array<Auto>=[];

  constructor() { }

  getAuto(){
    return this.listaAuto;
  }

  aggiungiAuto(auto){
    this.listaAuto.push(auto);
  }

  rimuoviAuto(indiceAuto){
    this.listaAuto.splice(indiceAuto,1);
  }

}


