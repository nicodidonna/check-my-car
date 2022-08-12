import { Component, OnInit } from '@angular/core';
import { Auto } from '../@auto/class/AutoClass';

@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit {

  listaAuto: Array<Auto> = [];
  auto1 = {
    marca: "Dacia",
    modello: "Duster",
    targa: "FA773ZR",
    cilindrata: 1.5,
    cavalli: 115,
    annoImmatricolazione: 2015,
    alimentazione: "Diesel"
  }

  constructor() { }

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

}
