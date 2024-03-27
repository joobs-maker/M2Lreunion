import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdresseComponent, } from './Adresse/adresse.component';
import { AddAdresseComponent } from './add-adresse/add-adresse.component';
import { HttpClientModule } from '@angular/common/http';
import { ParticipationComponent } from './Participation/participation.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AdresseComponent,
    AddAdresseComponent,
    ParticipationComponent,
    AddParticipationComponent,
    ReunionComponent,
    AddReunionComponent,
    UtilisateurComponent,
    AddUtilisateurComponent,
    StatutComponent,
    AddStatutComponent,
    SalleComponent,
    AddSalleComponent,
    ROLEComponent,
    AddRoleComponent,
   
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
