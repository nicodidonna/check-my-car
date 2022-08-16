import { Component, OnInit } from '@angular/core';
import { Auto } from '../@auto/class/AutoClass';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit {

  form: FormGroup;
  listaAuto: Array<Auto> = [];
  

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      marca: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      modello: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      targa: new FormControl("",Validators.compose([Validators.minLength(3), Validators.required])),
      cilindrata: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      cavalli: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      alimentazione: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      annoImmatricolazione: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required]))
    });
   }

  ngOnInit(): void {

    this.listaAuto.push(new Auto(
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
    
    this.listaAuto.push(new Auto(
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
    this.listaAuto.push(new Auto({
      marca: this.capitalizeFirstLetter(this.form.controls['marca'].value),
      modello: this.capitalizeFirstLetter(this.form.controls['modello'].value),
      targa: this.form.controls['targa'].value.toUpperCase(),
      cilindrata: this.form.controls['cilindrata'].value,
      cavalli: this.form.controls['cavalli'].value,
      annoImmatricolazione: this.form.controls['annoImmatricolazione'].value,
      alimentazione: this.capitalizeFirstLetter(this.form.controls['alimentazione'].value)
    }));

    this.form.reset;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
