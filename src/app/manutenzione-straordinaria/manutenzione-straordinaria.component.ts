import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoServiceService } from '../@auto/services/auto-service.service';
import { ManutenzioneStraordinaria } from '../@manutenzione/class/ManutenzioneClass';
import { ManutenzioneServiceService } from '../@manutenzione/services/manutenzione-service.service';

@Component({
  selector: 'app-manutenzione-straordinaria',
  templateUrl: './manutenzione-straordinaria.component.html',
  styleUrls: ['./manutenzione-straordinaria.component.scss']
})
export class ManutenzioneStraordinariaComponent implements OnInit {

  constructor(private fb : FormBuilder, public autoService : AutoServiceService, public manutenzioneService : ManutenzioneServiceService) {
    this.form = fb.group({
      officina: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      data: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required])),
      descrizione: new FormControl("", Validators.compose([Validators.minLength(8),Validators.required]))
    });
   }

  form : FormGroup;
  listaAuto = [];

  ngOnInit(): void {
    this.getAuto()
  }

  aggiungiManutenzione(){

    let autoSelezionata = this.form.controls['auto'].value;
    let nuovaManutenzione = new ManutenzioneStraordinaria({
      dataManutenzione: this.form.controls['data'].value,
      prezzo: this.form.controls['prezzo'].value,
      officina: this.capitalizeFirstLetter(this.form.controls['officina'].value) ,
      descrizione: this.capitalizeFirstLetter(this.form.controls['descrizione'].value),
      auto: autoSelezionata
    });
    

    if(this.form.valid){
      autoSelezionata.manutenzione.push(nuovaManutenzione);
      this.manutenzioneService.aggiungiManutenzione(nuovaManutenzione);
      this.form.reset();
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getAuto(){
    let arrAuto = [];
    this.autoService.getAuto1().subscribe(auto => {
      arrAuto = auto;
      this.listaAuto = arrAuto;
    });
  }
}
