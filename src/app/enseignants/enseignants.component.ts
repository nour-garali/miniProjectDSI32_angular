import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';



@Component({
  selector: 'app-enseignants',
  templateUrl: './enseignants.component.html'
})
export class EnseignantsComponent implements OnInit {
  enseignants: Enseignant[] = []; //un tableau de Produit
  constructor(private enseignantService: EnseignantService ) {

   // this.enseignants = enseignantService.listeEnseignants();
    
  }
 
  
  

updateEnseignant()
{ //console.log(this.currentProduit);

}


ngOnInit(): void {
  this.chargerEnseignants();

  }

  chargerEnseignants(){
    this.enseignantService.listeEnseignants().subscribe(ens => {
    console.log(ens);
    this.enseignants = ens;
    });
    }
    supprimerEnseignant(e: Enseignant)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.enseignantService.supprimerEnseignant(e.idEnseignant).subscribe(() => {
    console.log("enseignant supprimé");
    this.chargerEnseignants();
    });
    }
  }

