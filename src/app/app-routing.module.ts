import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';

import { EnseignantsComponent } from './enseignants/enseignants.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { RechercheParUniversityComponent } from './recherche-par-university/recherche-par-university.component';
import { RechercheParNomEnsComponent } from './recherche-par-nom-ens/recherche-par-nom-ens.component';
import { ListeUniversitiesComponent } from './liste-universities/liste-universities.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';


const routes: Routes = [
{path: "enseignants", component : EnseignantsComponent},
{path: "add-enseignant", component : AddEnseignantComponent},
{path: "updateEnseignant/:idEnseignant", component: UpdateEnseignantComponent},
{ path: "", redirectTo: "enseignants", pathMatch: "full" },
{path: "rechercheParUniversity", component : RechercheParUniversityComponent},
{path: "rechercheParNomEns", component : RechercheParNomEnsComponent},
{path: "listeUniversities", component : ListeUniversitiesComponent},
{path: "updateUniversity", component : UpdateUniversityComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
