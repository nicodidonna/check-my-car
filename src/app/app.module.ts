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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 



const firebaseConfig = {
  apiKey: "AIzaSyBFwkRyXrIx7QELPDFBqBxBakZB0_ERiwM",
  authDomain: "check-mycar.firebaseapp.com",
  databaseURL: "https://check-mycar-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "check-mycar",
  storageBucket: "check-mycar.appspot.com",
  messagingSenderId: "980735508102",
  appId: "1:980735508102:web:b659b57c4a80ddb1275b07",
  measurementId: "G-C9V1TP3DCG"
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
    AngularFireDatabaseModule,
    AngularFirestoreModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
