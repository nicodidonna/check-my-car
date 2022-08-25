import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Assicurazione } from '../@assicurazione/class/AssicurazioneClass';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-assicurazione-bollo',
  templateUrl: './assicurazione-bollo.component.html',
  styleUrls: ['./assicurazione-bollo.component.scss']
})
export class AssicurazioneBolloComponent implements OnInit {

  form : FormGroup;

  constructor(private fb: FormBuilder, public autoService: AutoServiceService) { 
    this.form = fb.group({
      agenzia: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      datainizio: new FormControl("",Validators.compose([Validators.required])),
      datafine: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required])),
    });
  }

  ngOnInit(): void {
  }

  aggiungiAssicurazione(){
    let autoSelezionata = this.form.controls['auto'].value;
    let nuovaAssicurazione = new Assicurazione({
      dataInizioAssicurazione : new Date(this.form.controls['datainizio'].value),
      dataFineAssicurazione : new Date(this.form.controls['datafine'].value),
      prezzo : this.form.controls['prezzo'].value,
      agenzia : this.form.controls['agenzia'].value,
      auto : autoSelezionata
    })

    autoSelezionata.assicurazioni.push(nuovaAssicurazione);

    this.form.reset();
  }

}
