import { Component, OnInit } from '@angular/core';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-assicurazione-bollo',
  templateUrl: './assicurazione-bollo.component.html',
  styleUrls: ['./assicurazione-bollo.component.scss']
})
export class AssicurazioneBolloComponent implements OnInit {

  constructor(public autoService: AutoServiceService) { }

  ngOnInit(): void {
  }

}
