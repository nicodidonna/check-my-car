import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-manutenzione-straordinaria',
  templateUrl: './manutenzione-straordinaria.component.html',
  styleUrls: ['./manutenzione-straordinaria.component.scss']
})
export class ManutenzioneStraordinariaComponent implements OnInit {

  constructor(private fb : FormBuilder, public autoService : AutoServiceService) {
    this.form = fb.group({
      officina: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      data: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required])),
      descrizione: new FormControl("", Validators.compose([Validators.minLength(8),Validators.required]))
    });
   }

  form : FormGroup;

  ngOnInit(): void {
  }

}
