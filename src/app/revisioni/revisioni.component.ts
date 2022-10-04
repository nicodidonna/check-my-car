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
  listaAuto = [];
  spinner : Boolean = true;
  listaRevisioni = [];

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
    this.getAuto();
  }

  aggiungiRevisione(){
    let idAutoSelezionata = this.form.controls['auto'].value;
    let nuovaRevisione = {
      dataRevisione : new Date(this.form.controls['data'].value),
      dataProssimaRevisione: this.revisioneService.getProssimaRevisione(new Date(this.form.controls['data'].value)),
      prezzo: this.form.controls['prezzo'].value,
      officina: this.capitalizeFirstLetter(this.form.controls['officina'].value),
      kilometraggio: this.form.controls['kilometraggio'].value,
      idAuto: idAutoSelezionata
    };

    if(this.form.valid){
    this.revisioneService.aggiungiRevisione(nuovaRevisione, idAutoSelezionata);
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
      this.fillListaRevisioni();
      this.spinner = false;
    });
  }

  getRevisioniAuto(idAuto) : any{
    this.revisioneService.getRevisioni(idAuto).subscribe(revisioniAutoSelezionata=>{
      if(revisioniAutoSelezionata.length > 0){
        revisioniAutoSelezionata.forEach(element => {
          this.listaRevisioni.push(element);
        });
      }
    });
  }

  fillListaRevisioni(){
    if(this.listaAuto){
      this.listaAuto.forEach(auto => {
        this.getRevisioniAuto(auto.id);
      });
    }
  }

}
