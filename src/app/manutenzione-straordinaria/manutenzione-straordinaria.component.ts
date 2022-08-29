import { Component, OnInit } from '@angular/core';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-manutenzione-straordinaria',
  templateUrl: './manutenzione-straordinaria.component.html',
  styleUrls: ['./manutenzione-straordinaria.component.scss']
})
export class ManutenzioneStraordinariaComponent implements OnInit {

  constructor(public autoService : AutoServiceService) { }

  ngOnInit(): void {
  }

}
