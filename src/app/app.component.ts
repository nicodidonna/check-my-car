import { Component } from '@angular/core';
import { Assicurazione } from './@assicurazione/class/AssicurazioneClass';
import { AssicurazioneServiceService } from './@assicurazione/services/assicurazione-service.service';
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

  constructor(public assicurazioneService: AssicurazioneServiceService,public revisioniService: RevisioneServiceService,public autoService: AutoServiceService, public tagliandoService: TagliandoServiceService) {
  }

  ngOnInit() {

    this.assicurazioneService.aggiungiAssicurazione(new Assicurazione({
      dataInizioAssicurazione : new Date("2018-1-20"),
      dataFineAssicurazione : new Date("2018-7-20"),
      prezzo : 265,
      agenzia : "Ancona Assicurazioni",
      auto : this.autoService.getAuto()[0]
    }))

    this.assicurazioneService.aggiungiAssicurazione(new Assicurazione({
      dataInizioAssicurazione : new Date("2021-3-20"),
      dataFineAssicurazione : new Date("2022-3-20"),
      prezzo : 410,
      agenzia : "Didonna Assicurazioni",
      auto : this.autoService.getAuto()[0]
    }))

    this.assicurazioneService.aggiungiAssicurazione(new Assicurazione({
      dataInizioAssicurazione : new Date("2017-4-13"),
      dataFineAssicurazione : new Date("2019-10-13"),
      prezzo : 180,
      agenzia : "Luca Assicurazioni",
      auto : this.autoService.getAuto()[1]
    }))

    this.assicurazioneService.aggiungiAssicurazione(new Assicurazione({
      dataInizioAssicurazione : new Date("2019-1-20"),
      dataFineAssicurazione : new Date("2019-7-20"),
      prezzo : 330,
      agenzia : "Generali Assicurazioni",
      auto : this.autoService.getAuto()[1]
    }))

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
        tagliandi: [this.tagliandoService.getTagliandi()[0],this.tagliandoService.getTagliandi()[1]],
        revisioni: [this.revisioniService.getRevisioni()[0],this.revisioniService.getRevisioni()[1]]
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
        tagliandi: [this.tagliandoService.getTagliandi()[2],this.tagliandoService.getTagliandi()[3]],
        revisioni: [this.revisioniService.getRevisioni()[2],this.revisioniService.getRevisioni()[3]]
      }
    ));
  }
}
