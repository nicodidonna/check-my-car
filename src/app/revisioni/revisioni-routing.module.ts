import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisioniComponent } from './revisioni.component';

const routes: Routes = [
  {path:"",component:RevisioniComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevisioniRoutingModule { }
