import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoServiceService } from '../@auto/services/auto-service.service';

@Component({
  selector: 'app-revisioni',
  templateUrl: './revisioni.component.html',
  styleUrls: ['./revisioni.component.scss']
})
export class RevisioniComponent implements OnInit {

  form : FormGroup;

  constructor(private fb: FormBuilder, public autoService : AutoServiceService) { 
    this.form = fb.group({
      officina: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      data: new FormControl("",Validators.compose([Validators.required])),
      kilometraggio: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
  }

}
