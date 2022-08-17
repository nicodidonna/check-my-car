import { Component, OnInit } from '@angular/core';
import { Tagliando } from '../@tagliando/class/TagliandoClass';

@Component({
  selector: 'app-revisioni',
  templateUrl: './revisioni.component.html',
  styleUrls: ['./revisioni.component.scss']
})
export class RevisioniComponent implements OnInit {

  listaTagliandi: Array<Tagliando> = [];

  constructor() { }

  ngOnInit(): void {
    this.listaTagliandi.push(new Tagliando({
      dataTagliando: new Date(),
      prezzo: 100,
      officina: "Tonio e Nino",
      descrizione: "Cambio dell'olio e filtro abitacolo",
      kilometraggio: 40000
    }))
  }

}
