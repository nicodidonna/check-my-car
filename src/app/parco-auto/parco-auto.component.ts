import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  auto1 = {
    marca: "Dacia",
    modello: "Duster",
    targa: "FA773ZR",
    cilindrata: 1.5,
    cavalli: 115,
    annoImmatricolazione: 2015,
    alimentazione: "Diesel"
  }

  auto2 = {
    marca: "Citroen",
    modello: "C3",
    targa: "CK829YZ",
    cilindrata: 1.1,
    cavalli: 60,
    annoImmatricolazione: 2004,
    alimentazione: "Benzina"
  }

  arrAuto = [this.auto1,this.auto2];
}
