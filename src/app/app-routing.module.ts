import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  AdresseComponent } from './Adresse/adresse.component';
import { AddAdresseComponent } from './add-adresse/add-adresse.component';
import {  ParticipationComponent } from './Participation/participation.component';
import { AddParticipationComponent } from './add-participation/add-participation.component';
import { ReunionComponent } from './Reunion/reunion.component';
import { AddReunionComponent } from './add-reunion/add-reunion.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { StatutComponent } from './statut/statut.component';
import { AddStatutComponent } from './add-statut/add-statut.component';
import { SalleComponent } from './Salle/salle.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { ROLEComponent } from './Role/role.component';
import { AddRoleComponent } from './add-role/add-role.component';



const routes: Routes = [
  {path : 'adresse', component: AdresseComponent },
  {path : 'add-adresse', component: AddAdresseComponent },
  {path: "", redirectTo: "adresse", pathMatch: "full" },
  {path : 'participation', component: ParticipationComponent },
  {path : 'add-participation', component: AddParticipationComponent },
  {path: "", redirectTo: "participation", pathMatch: "full" },
  {path : 'reunion', component: ReunionComponent },
  {path : 'add-reunion', component: AddReunionComponent },
  {path: "", redirectTo: "reunion", pathMatch: "full" },
  {path : 'utilisateur', component: UtilisateurComponent },
  {path : 'add-utilisateur', component: AddUtilisateurComponent },
  {path: "", redirectTo: "utilisateur", pathMatch: "full" },
  {path: "statut", component : StatutComponent},
  {path: "add-statut", component : AddStatutComponent},
  {path: "", redirectTo: "statut", pathMatch: "full" },
  {path: "salle", component : SalleComponent},
  {path: "add-salle", component : AddSalleComponent},
  {path: "", redirectTo: "salle", pathMatch: "full" },
  {path: "role", component : ROLEComponent},
  {path: "role", component : ROLEComponent},
{path: "add-role", component : AddRoleComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
