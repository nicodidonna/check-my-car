import { Component } from '@angular/core';
import { Auto } from './@auto/class/AutoClass';
import { AutoServiceService } from './@auto/services/auto-service.service';
import { Tagliando } from './@tagliando/class/TagliandoClass';
import { TagliandoServiceService } from './@tagliando/services/tagliando-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'check-my-car';

  constructor(public autoService: AutoServiceService, public tagliandoService: TagliandoServiceService) {
  }

  ngOnInit() {
    this.tagliandoService.aggiungiTagliando(new Tagliando({
      dataTagliando: new Date(),
      prezzo: 100,
      officina: "Tonio e Nino",
      descrizione: "Cambio dell'olio e filtro abitacolo",
      kilometraggio: 40000,
      auto: this.autoService.getAuto()[0]
    }))

    this.tagliandoService.aggiungiTagliando(new Tagliando({
      dataTagliando: new Date(),
      prezzo: 200,
      officina: "Tonio e Nino 2",
      descrizione: "Cambio dell'olio e filtro abitacolo 2",
      kilometraggio: 40000,
      auto: this.autoService.getAuto()[0]
    }))

    this.tagliandoService.aggiungiTagliando(new Tagliando({
      dataTagliando: new Date(),
      prezzo: 300,
      officina: "Tonio e Nino 3",
      descrizione: "Cambio dell'olio e filtro abitacolo 3",
      kilometraggio: 40000,
      auto: this.autoService.getAuto()[1]
    }))

    this.tagliandoService.aggiungiTagliando(new Tagliando({
      dataTagliando: new Date(),
      prezzo: 400,
      officina: "Tonio e Nino 4",
      descrizione: "Cambio dell'olio e filtro abitacolo 4",
      kilometraggio: 40000,
      auto: this.autoService.getAuto()[1]
    }))

    this.autoService.aggiungiAuto(new Auto(
      {
        marca:"Dacia",
        modello:"Duster",
        targa:"FA773ZR",
        cilindrata:1.5,
        cavalli:115,
        annoImmatricolazione:2015,
        alimentazione:"Diesel",
        tagliandi: [this.tagliandoService.getTagliandi()[0],this.tagliandoService.getTagliandi()[1]]
      }
    ));
    
    this.autoService.aggiungiAuto(new Auto(
      {
        marca: "Citroen",
        modello: "C3",
        targa: "CK829YZ",
        cilindrata: 1.1,
        cavalli: 60,
        annoImmatricolazione: 2004,
        alimentazione: "Benzina",
        tagliandi: [this.tagliandoService.getTagliandi()[2],this.tagliandoService.getTagliandi()[3]]
      }
    ));
  }
}
