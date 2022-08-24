import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoServiceService } from '../@auto/services/auto-service.service';
import { Revisione } from '../@revisione/class/RevisioneClass';
import { RevisioneServiceService } from '../@revisione/services/revisione-service.service';

@Component({
  selector: 'app-revisioni',
  templateUrl: './revisioni.component.html',
  styleUrls: ['./revisioni.component.scss']
})
export class RevisioniComponent implements OnInit {

  form : FormGroup;

  constructor(private fb: FormBuilder, public autoService : AutoServiceService, public revisioneService : RevisioneServiceService) { 
    this.form = fb.group({
      officina: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      data: new FormControl("",Validators.compose([Validators.required])),
      kilometraggio: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
  }

  aggiungiRevisione(){
    let autoSelezionata = this.form.controls['auto'].value;
    let nuovaRevisione = new Revisione({
      dataRevisione : new Date(this.form.controls['data'].value),
      dataProssimaRevisione: this.revisioneService.getProssimaRevisione(new Date(this.form.controls['data'].value)),
      prezzo: this.form.controls['prezzo'].value,
      officina: this.form.controls['officina'].value,
      kilometraggio: this.form.controls['kilometraggio'].value,
      auto: autoSelezionata
    });

    autoSelezionata.revisioni.push(nuovaRevisione);

    this.form.reset();
  }

}
