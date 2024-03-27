import { StatutService } from './../services/statut.service';
import { Component,OnInit } from '@angular/core';
import { Statut } from './../model/statut.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',

})

export class StatutComponent implements OnInit {
  statuts! : Statut[];

  constructor(private statutService : StatutService, private router : Router) { }

  ngOnInit(): void {
    this.listerStatut();

}

  listerStatut() {
    /* Convertis le JSON en tableau pour le voir*/
       this.statutService.listeStatut().subscribe(prods => {
        console.log(prods);
        this.statuts = prods;
        });

    }

     supprimerStatut( statut: Statut) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf && statut.idStatut!== undefined)
      this.statutService.supprimerStatut(statut.idStatut).subscribe(() => {
      console.log("statut supprimé");
      this.listerStatut();
      });
      }
    }







