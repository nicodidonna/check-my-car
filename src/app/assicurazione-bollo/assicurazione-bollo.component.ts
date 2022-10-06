import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Assicurazione } from '../@assicurazione/class/AssicurazioneClass';
import { AssicurazioneServiceService } from '../@assicurazione/services/assicurazione-service.service';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-assicurazione-bollo',
  templateUrl: './assicurazione-bollo.component.html',
  styleUrls: ['./assicurazione-bollo.component.scss']
})
export class AssicurazioneBolloComponent implements OnInit {

  form : FormGroup;
  listaAuto = [];
  spinner : Boolean = true;
  listaAssicurazioni = [];

  constructor(private fb: FormBuilder, public autoService: AutoServiceService, public assicurazioneService : AssicurazioneServiceService) { 
    this.form = fb.group({
      agenzia: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      datainizio: new FormControl("",Validators.compose([Validators.required])),
      datafine: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
    this.getAuto();
  }

  aggiungiAssicurazione(){
    let idAutoSelezionata = this.form.controls['auto'].value;
    let nuovaAssicurazione = {
      dataInizioAssicurazione : new Date(this.form.controls['datainizio'].value),
      dataFineAssicurazione : new Date(this.form.controls['datafine'].value),
      prezzo : this.form.controls['prezzo'].value,
      agenzia : this.capitalizeFirstLetter(this.form.controls['agenzia'].value),
      idAuto : idAutoSelezionata
    };

    if(this.form.valid){
    this.assicurazioneService.aggiungiAssicurazione(nuovaAssicurazione, idAutoSelezionata);
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
      this.fillListaAssicurazioni();
      this.spinner = false;
    });
  }

  getAssicurazioniAuto(idAuto) : any{
    this.assicurazioneService.getAssicurazioni(idAuto).subscribe(assicurazioniAutoSelezionata=>{
      if(assicurazioniAutoSelezionata.length > 0){
        assicurazioniAutoSelezionata.forEach(element => {
          this.listaAssicurazioni.push(element);
        });
      }
    });
  }

  fillListaAssicurazioni(){
    if(this.listaAuto){
      this.listaAuto.forEach(auto => {
        this.getAssicurazioniAuto(auto.id);
      });
    }
  }

  rimuoviAssicurazione(idAssicurazione, idAuto){
    this.assicurazioneService.rimuoviAssicurazione(idAssicurazione,idAuto).then(res => {window.location.reload()});
  }

}
