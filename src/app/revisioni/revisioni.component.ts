import { Component, OnInit } from '@angular/core';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-revisioni',
  templateUrl: './revisioni.component.html',
  styleUrls: ['./revisioni.component.scss']
})
export class RevisioniComponent implements OnInit {

  constructor(public autoService : AutoServiceService) { }

  ngOnInit(): void {
  }

}
