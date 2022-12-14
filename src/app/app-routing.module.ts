import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home", redirectTo:"",pathMatch:"full"},
  {path:"", loadChildren: ()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:"parco-auto", loadChildren: ()=>import("./parco-auto/parco-auto.module").then(m=>m.ParcoAutoModule)},
  {path:"revisioni",loadChildren:()=>import("./revisioni/revisioni.module").then(m=>m.RevisioniModule)},
  {path:"tagliandi",loadChildren:()=>import("./tagliandi/tagliandi.module").then(m=>m.TagliandiModule)},
  {path:"assicurazione",loadChildren:()=>import("./assicurazione-bollo/assicurazione-bollo.module").then(m=>m.AssicurazioneBolloModule)},
  {path:"manutenzione-straordinaria",loadChildren:()=>import("./manutenzione-straordinaria/manutenzione-straordinaria.module").then(m=>m.ManutenzioneStraordinariaModule)}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
