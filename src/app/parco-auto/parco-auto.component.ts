import { Component, OnInit } from '@angular/core';
import { Auto } from '../@auto/class/AutoClass';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit {

  form: FormGroup;
  

  constructor(private fb: FormBuilder, public AutoService: AutoServiceService) {
    this.form = fb.group({
      marca: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      modello: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      targa: new FormControl("",Validators.compose([Validators.pattern("^([A-Ha-h]|[K-Nk-n]|[Pp]|[R-Tr-t]|[Vv]|[X-Zx-z]){2}[1-9]{3}([A-Ha-h]|[K-Nk-n]|[Pp]|[R-Tr-t]|[Vv]|[X-Zx-z]){2}$"),Validators.required])),
      cilindrata: new FormControl("",Validators.compose([Validators.pattern('^[0-9]{3,4}$'),Validators.required])),
      cavalli: new FormControl("", Validators.compose([Validators.pattern('^[0-9]{3,4}$'), Validators.required])),
      alimentazione: new FormControl("", Validators.compose([Validators.required])),
      annoImmatricolazione: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required]))
    });
   }

  ngOnInit(): void {

    this.AutoService.aggiungiAuto(new Auto(
      {
        marca:"Dacia",
        modello:"Duster",
        targa:"FA773ZR",
        cilindrata:1.5,
        cavalli:115,
        annoImmatricolazione:2015,
        alimentazione:"Diesel"
      }
    ));
    
    this.AutoService.aggiungiAuto(new Auto(
      {
        marca: "Citroen",
        modello: "C3",
        targa: "CK829YZ",
        cilindrata: 1.1,
        cavalli: 60,
        annoImmatricolazione: 2004,
        alimentazione: "Benzina"
      }
    ));

  }


  aggiungiAuto(){
    this.checkAnnoImmatricolazione(this.form.controls['annoImmatricolazione'].value);

    if(this.form.valid){
    this.AutoService.aggiungiAuto(new Auto({
      marca: this.capitalizeFirstLetter(this.form.controls['marca'].value),
      modello: this.capitalizeFirstLetter(this.form.controls['modello'].value),
      targa: this.form.controls['targa'].value.toUpperCase(),
      cilindrata: this.setCilindrata(this.form.controls['cilindrata'].value/1000),
      cavalli: this.form.controls['cavalli'].value,
      annoImmatricolazione: this.checkAnnoImmatricolazione(this.form.controls['annoImmatricolazione'].value),
      alimentazione: this.capitalizeFirstLetter(this.form.controls['alimentazione'].value)
    }));

    this.form.reset;
  }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  setCilindrata(cilindrata){
    
    let cilindrataFix;
    for (let i = 0; i <= 9; i++) {
      if(cilindrata % 1 != 0){
        cilindrataFix = Math.round(cilindrata * 10) / 10
        return cilindrataFix;
      }else{
        return cilindrata+'.0';
      }
    }
  }

  checkAnnoImmatricolazione(annoInserito){
    let today = new Date();
    let todayYear = today.getFullYear();
    if (annoInserito > todayYear) {
      this.form.controls['annoImmatricolazione'].setErrors({'incorrect': true});
    }else{
      return annoInserito;
    }
  }

  rimuoviAuto(targa){
    let indiceAutoSelezionata = this.AutoService.listaAuto.findIndex(x => x.targa === targa);
    this.AutoService.listaAuto.splice(indiceAutoSelezionata,1);
  }
}
