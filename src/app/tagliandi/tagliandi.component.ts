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

  constructor(public autoService: AutoServiceService, public tagliandoService: TagliandoServiceService) { }

  ngOnInit(): void {
  }

}
