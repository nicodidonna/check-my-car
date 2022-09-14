import { Component } from '@angular/core';
import { Assicurazione } from './@assicurazione/class/AssicurazioneClass';
import { AssicurazioneServiceService } from './@assicurazione/services/assicurazione-service.service';
import { Auto } from './@auto/class/AutoClass';
import { AutoServiceService } from './@auto/services/auto-service.service';
import { ManutenzioneStraordinaria } from './@manutenzione/class/ManutenzioneClass';
import { ManutenzioneServiceService } from './@manutenzione/services/manutenzione-service.service';
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

  constructor(public manutenzioneService : ManutenzioneServiceService,public assicurazioneService: AssicurazioneServiceService,public revisioniService: RevisioneServiceService,public autoService: AutoServiceService, public tagliandoService: TagliandoServiceService) {
  }

  ngOnInit() {
  }
}
