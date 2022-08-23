import { Component } from '@angular/core';
import { Auto } from './@auto/class/AutoClass';
import { AutoServiceService } from './@auto/services/auto-service.service';
import { Revisione } from './@revisione/class/RevisioneClass';
import { RevisioneServiceService } from './@revisione/services/revisione-service.service';
import { Tagliando } from './@tagliando/class/TagliandoClass';
import { TagliandoServiceService } from './@tagliando/services/tagliando-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'check-my-car';

  constructor(public revisioniService: RevisioneServiceService,public autoService: AutoServiceService, public tagliandoService: TagliandoServiceService) {
  }

  ngOnInit() {

    this.revisioniService.aggiungiRevisione(new Revisione({
      dataRevisione: new Date("2020-10-10"),
      dataProssimaRevisione: this.revisioniService.getProssimaRevisione(new Date("2020-10-10")),
      prezzo: 200,
      officina: "Tansella",
      kilometraggio: 10000,
      auto: this.autoService.getAuto()[0]
    }))
    
    this.revisioniService.aggiungiRevisione(new Revisione({
      dataRevisione: new Date("2022-12-12"),
      dataProssimaRevisione: this.revisioniService.getProssimaRevisione(new Date("2022-12-12")),
      prezzo: 300,
      officina: "Tansella 2",
      kilometraggio: 3000,
      auto: this.autoService.getAuto()[0]
    }))

    this.revisioniService.aggiungiRevisione(new Revisione({
      dataRevisione: new Date("2018-10-10"),
      dataProssimaRevisione: this.revisioniService.getProssimaRevisione(new Date("2018-6-6")),
      prezzo: 400,
      officina: "Tansella 3",
      kilometraggio: 45000,
      auto: this.autoService.getAuto()[1]
    }))

    this.revisioniService.aggiungiRevisione(new Revisione({
      dataRevisione: new Date("2017-11-20"),
      dataProssimaRevisione: this.revisioniService.getProssimaRevisione(new Date("2017-11-20")),
      prezzo: 500,
      officina: "Tansella 4",
      kilometraggio: 87000,
      auto: this.autoService.getAuto()[1]
    }))      

    this.tagliandoService.aggiungiTagliando(new Tagliando({
      dataTagliando: new Date("2000-06-12"),
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
