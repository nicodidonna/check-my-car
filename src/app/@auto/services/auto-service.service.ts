import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Auto } from '../class/AutoClass';

@Injectable({
  providedIn: 'root'
})
export class AutoServiceService {

  listaAuto;

  constructor(private database : AngularFirestore) { }

  aggiungiAuto(auto){
    this.database.collection('Auto').add(JSON.parse(JSON.stringify(auto))).then(res=>{},err=>{});
    setTimeout(()=>{window.location.reload()},2000);
  }

  rimuoviAuto(idAuto){
    return this.database.collection('Auto').doc(idAuto).delete()
  }

  getAuto1() {
    return this.database.collection('Auto').valueChanges({ idField: 'id' });
    
  }

}


