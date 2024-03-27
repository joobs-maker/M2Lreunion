
import { Component,OnInit  } from '@angular/core';
import { ReunionService } from '../services/reunion.service';
import { Router } from '@angular/router';
import { Reunion } from './../model/reunion.model';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',

})
export class ReunionComponent implements OnInit {
  reunions! : Reunion[]

  constructor(private reunionService : ReunionService, private router : Router) {}

  ngOnInit(): void {
    this.listerReunions();

}

   listerReunions() {
 /* Convertis le JSON en tableau pour le voir*/
    this.reunionService.listeReunion().subscribe(prods => {
     console.log(prods);
     this.reunions = prods;
     });

 }

  supprimerReunion( reunion:Reunion) {
   let conf = confirm("Etes-vous sûr ?");
   if (conf && reunion.idReunion !== undefined)
   this.reunionService.supprimerReunion(reunion.idReunion).subscribe(() => {
   console.log("reunion supprimé");
   this.listerReunions();
   });
   }
 }



