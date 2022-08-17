import { Component, OnInit } from '@angular/core';
import { AutoServiceService } from '../@auto/services/auto-service.service';
import { Tagliando } from '../@tagliando/class/TagliandoClass';
import { TagliandoServiceService } from '../@tagliando/services/tagliando-service.service';

@Component({
  selector: 'app-tagliandi',
  templateUrl: './tagliandi.component.html',
  styleUrls: ['./tagliandi.component.scss']
})
export class TagliandiComponent implements OnInit {

  constructor(public AutoService: AutoServiceService, public TagliandoService: TagliandoServiceService) { }

  ngOnInit(): void {
    this.TagliandoService.aggiungiTagliando(new Tagliando({
      dataTagliando: new Date(),
      prezzo: 100,
      officina: "Tonio e Nino",
      descrizione: "Cambio dell'olio e filtro abitacolo",
      kilometraggio: 40000,
      auto: this.AutoService.listaAuto[1]
    }))
  }

}
