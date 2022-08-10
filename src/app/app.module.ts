import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ParcoAutoComponent } from './parco-auto/parco-auto.component';
import { TagliandiComponent } from './tagliandi/tagliandi.component';
import { RevisioniComponent } from './revisioni/revisioni.component';
import { AssicurazioneBolloComponent } from './assicurazione-bollo/assicurazione-bollo.component';
import { ManutenzioneStraordinariaComponent } from './manutenzione-straordinaria/manutenzione-straordinaria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ParcoAutoComponent,
    TagliandiComponent,
    RevisioniComponent,
    AssicurazioneBolloComponent,
    ManutenzioneStraordinariaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
