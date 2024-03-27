import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  
})
export class UtilisateurComponent implements OnInit {
  utilisateur : string[]

  constructor() { 

    this.utilisateur= [ "nom", "prenom" , "email" , "password" ];
  }

  ngOnInit(): void {

}
}


