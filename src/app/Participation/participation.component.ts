import { Component ,OnInit } from '@angular/core';
import { ParticipationService } from '../services/participation.service';
import { Router } from '@angular/router';
import { Participation } from './../model/participation.model';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html'

})
export class ParticipationComponent implements OnInit {
  participations! : Participation[] //un tableau de chînes de caractères

  constructor(private ParticipationService : participationService, private router : Router) {}

  ngOnInit(): void {
    this.listerParticipations();

}

  listerParticipations() {

 /* Convertis le JSON en tableau pour le voir*/
    this.participationService.listeParticipation().subscribe(prods => {
     console.log(prods);
     this.participations = prods;
     });

 }

  supprimerParticipation( reunion:Participation) {
   let conf = confirm("Etes-vous sûr ?");
   if (conf && participation.idParticipation !== undefined)
   this.participationService.supprimerReunion(reunion.idParticipation).subscribe(() => {
   console.log("reunion supprimé");
   this.listerParticipations();
   });
   }
 }
