import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssicurazioneBolloComponent } from './assicurazione-bollo.component';

const routes: Routes = [
  {path:"",component:AssicurazioneBolloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssicurazioneBolloRoutingModule { }
