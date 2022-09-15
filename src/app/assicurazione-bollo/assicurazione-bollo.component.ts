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
    let autoSelezionata = this.form.controls['auto'].value;
    let nuovaAssicurazione = new Assicurazione({
      dataInizioAssicurazione : new Date(this.form.controls['datainizio'].value),
      dataFineAssicurazione : new Date(this.form.controls['datafine'].value),
      prezzo : this.form.controls['prezzo'].value,
      agenzia : this.capitalizeFirstLetter(this.form.controls['agenzia'].value),
      auto : autoSelezionata
    })

    if(this.form.valid){
    autoSelezionata.assicurazioni.push(nuovaAssicurazione);
    this.assicurazioneService.aggiungiAssicurazione(nuovaAssicurazione);
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
