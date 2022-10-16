import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AutoServiceService } from '../@auto/services/auto-service.service';
import { TagliandoServiceService } from '../@tagliando/services/tagliando-service.service';

@Component({
  selector: 'app-tagliandi',
  templateUrl: './tagliandi.component.html',
  styleUrls: ['./tagliandi.component.scss']
})
export class TagliandiComponent implements OnInit {

  form: FormGroup;
  listaAuto = [];
  spinner : Boolean = true;
  listaTagliandi = [];
  deleteConfirm : boolean = false;
  idTagliandoToDelete : number;


  constructor(private fb: FormBuilder, public autoService: AutoServiceService, public tagliandoService: TagliandoServiceService) { 
    this.form = fb.group({
      officina: new FormControl("", Validators.compose([Validators.minLength(3), Validators.required])),
      prezzo: new FormControl("", Validators.compose([Validators.minLength(2), Validators.required])),
      data: new FormControl("",Validators.compose([Validators.required])),
      kilometraggio: new FormControl("",Validators.compose([Validators.required])),
      auto: new FormControl("", Validators.compose([Validators.required])),
      descrizione: new FormControl("", Validators.compose([Validators.minLength(8),Validators.required])),
    });
  }

  ngOnInit(): void {
    this.getAuto();
  }

  aggiungiTagliando(){

    let idAutoSelezionata = this.form.controls['auto'].value;
    let nuovoTagliando = {
      dataTagliando: this.form.controls['data'].value,
      prezzo: this.form.controls['prezzo'].value,
      officina: this.capitalizeFirstLetter(this.form.controls['officina'].value) ,
      descrizione: this.capitalizeFirstLetter(this.form.controls['descrizione'].value),
      kilometraggio:this.form.controls['kilometraggio'].value,
      idAuto: idAutoSelezionata
    }

    if(this.form.valid){
      this.tagliandoService.aggiungiTagliando(nuovoTagliando, idAutoSelezionata);
      this.form.reset();
    }
  }


  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getAuto(){
    let arrAuto = [];
    this.autoService.getAuto1().subscribe(auto => {
      arrAuto = auto;
      this.listaAuto = arrAuto;
      this.fillListaTagliandi();
      this.spinner = false;
    });
  }

  getTagliandiAuto(idAuto) : any{
    this.tagliandoService.getTagliandi(idAuto).subscribe(tagliandiAutoSelezionata=>{ //get tagliandi from db
      if(tagliandiAutoSelezionata.length > 0){ //controlla che ci siano tagliandi per l'auto ciclata
        tagliandiAutoSelezionata.forEach(element => { 
          this.listaTagliandi.push(element); //pusha ogni tagliando in lista tagliandi
        });
      }else { //controlla se NON ci sono tagliandi
        this.listaAuto.forEach(element => { //cicla lista di Auto
          if (element.id == idAuto) { //controlla che l'auto ciclata corisponda a quella selezionata
            element.hasNotTagliandi = true; //aggiunge una proprietà che è true quando l'auto NON ha tagliandi
          }
        })
      }
    });
  }

  fillListaTagliandi(){
    if(this.listaAuto){
      this.listaAuto.forEach(auto => {
        this.getTagliandiAuto(auto.id);
      });
    }
  }

  rimuoviTagliando(idTagliando, idAuto){
    this.tagliandoService.rimuoviTagliando(idTagliando,idAuto).then(res => {this.deleteConfirm = false;});
  }

  clickOnDelete(idTagliando){
    this.idTagliandoToDelete = idTagliando;
    this.deleteConfirm = true;
  }

}
