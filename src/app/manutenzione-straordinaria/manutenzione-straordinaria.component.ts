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
  spinner : Boolean = true;
  listaManutenzioni = [];

  ngOnInit(): void {
    this.getAuto()
  }

  aggiungiManutenzione(){

    let idAutoSelezionata = this.form.controls['auto'].value;
    let nuovaManutenzione = {
      dataManutenzione: this.form.controls['data'].value,
      prezzo: this.form.controls['prezzo'].value,
      officina: this.capitalizeFirstLetter(this.form.controls['officina'].value) ,
      descrizione: this.capitalizeFirstLetter(this.form.controls['descrizione'].value),
      idAuto: idAutoSelezionata
    };
    

    if(this.form.valid){
      this.manutenzioneService.aggiungiManutenzione(nuovaManutenzione, idAutoSelezionata);
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
      this.fillListaManutenzioni();
      this.spinner = false;
    });
  }

  getManutenzioniAuto(idAuto) : any{
    this.manutenzioneService.getManutenzioni(idAuto).subscribe(manutenzioniAutoSelezionata=>{
      if(manutenzioniAutoSelezionata.length > 0){
        manutenzioniAutoSelezionata.forEach(element => {
          this.listaManutenzioni.push(element);
        });
      }
    });
  }

  fillListaManutenzioni(){
    if(this.listaAuto){
      this.listaAuto.forEach(auto => {
        this.getManutenzioniAuto(auto.id);
      });
    }
  }

}
