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
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';



export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

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
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
