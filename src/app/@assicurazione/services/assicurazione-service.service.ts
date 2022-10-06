import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Assicurazione } from '../class/AssicurazioneClass';

@Injectable({
  providedIn: 'root'
})
export class AssicurazioneServiceService {

  listaAssicurazioni : Array<Assicurazione> = [];

  constructor(private database : AngularFirestore) { }

  getAssicurazioni(idAuto){
    return this.database.collection("Auto/"+idAuto+"/assicurazioni").valueChanges({ idField: 'id' })
  }

  aggiungiAssicurazione(assicurazione, idAuto){
    this.database.collection('Auto').doc(idAuto).collection('assicurazioni').add(JSON.parse(JSON.stringify(assicurazione))).then(res=>{},err=>{});
    setTimeout(()=>{window.location.reload()},2000);
  }

  rimuoviAssicurazione(idAssicurazione, idAuto){
    return this.database.collection('Auto').doc(idAuto).collection('assicurazioni').doc(idAssicurazione).delete()
  }

}
