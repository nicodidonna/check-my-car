import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutenzioneStraordinariaComponent } from './manutenzione-straordinaria.component';

const routes: Routes = [
  {path:"",component:ManutenzioneStraordinariaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManutenzioneStraordinariaRoutingModule { }
