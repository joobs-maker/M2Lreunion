import { Participation } from './../model/participation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'

})
export class ParticipationService {

  apiURL: string = 'http://localhost:8080/m2lFormation/api/utilisateur'
  participation!: Participation[]

  constructor(private http : HttpClient) {  }



updateParticipation(form :Participation) : Observable<Participation>
{
      return this.http.put<Participation>(this.apiURL, form, httpOptions);
}

consulterParticipation(id: number): Observable<Participation> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Participation>(url, httpOptions);
  }

  listeParticipation(): Observable<Participation[]>{
    const url = `${this.apiURL}/all`;
  return this.http.get<Participation[]>(url);
  }
  supprimerParticipation(id : number) {
    const url = `${this.apiURL}/delete/${id}`;
    return this.http.delete(url, httpOptions);
    }


  addParticipation(newParticipation: Participation):Observable<Participation>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Participation>(url, newParticipation, httpOptions);
     }

}




