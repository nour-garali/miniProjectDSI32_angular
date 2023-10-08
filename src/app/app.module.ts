import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnseignantsComponent } from './enseignants/enseignants.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RechercheParUniversityComponent } from './recherche-par-university/recherche-par-university.component';
import { RechercheParNomEnsComponent } from './recherche-par-nom-ens/recherche-par-nom-ens.component';
import { ListeUniversitiesComponent } from './liste-universities/liste-universities.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';


@NgModule({
  declarations: [
    AppComponent,
    EnseignantsComponent,
    AddEnseignantComponent,
    UpdateEnseignantComponent,
    RechercheParUniversityComponent,
    RechercheParNomEnsComponent,
    ListeUniversitiesComponent,
    UpdateUniversityComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
