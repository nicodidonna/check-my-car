import { Injectable } from '@angular/core';
import { Auto } from '../class/AutoClass';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  listaAuto : Array<Auto>=[];

  constructor() { }

  aggiungiAuto(auto){
    this.listaAuto.push(auto);
  }

  rimuoviAuto(auto){

  }

}


