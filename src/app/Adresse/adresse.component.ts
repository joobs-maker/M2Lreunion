
import { Component ,OnInit } from '@angular/core';
import { Adresse } from '../model/adresse.model';
import { AdresseService } from "../services/adresse.service";
import { Router } from '@angular/router';




@Component({
  selector: 'app-adresses',
  templateUrl: './adresse.component.html'
})
export class AdresseComponent implements OnInit  {

  adresses! : Adresse[];

  constructor(private adresseService : AdresseService, private router : Router) {}

   ngOnInit(): void {
    this.listerAdresses();



  }
  listerAdresses() {
    /* Convertis le JSON en tableau pour le voir*/
       this.adresseService.listeAdresse().subscribe(prods => {
        console.log(prods);
        this.adresses = prods;
        });

    }

     supprimerAdresse( adresse: Adresse) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf && adresse.idAdresse!== undefined)
      this.adresseService.supprimerAdresse(adresse.idAdresse).subscribe(() => {
      console.log("adresse supprimé");
      this.listerAdresses();
      });
      }
    }


