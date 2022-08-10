import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcoAutoComponent } from './parco-auto.component';

const routes: Routes = [
  {path:"",component:ParcoAutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcoAutoRoutingModule { }
