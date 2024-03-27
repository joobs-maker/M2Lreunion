
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Statut } from '../model/statut.model';


const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'

})
export class StatutService {

  apiURL: string = 'http://localhost:8080/m2lFormation/api/statut'
  statut!: Statut[]

  constructor(private http : HttpClient) {  }



updateUStatut(form :Statut) : Observable<Statut>
{
      return this.http.put<Statut>(this.apiURL, form, httpOptions);
}

consulterStatut(id: number): Observable<Statut> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Statut>(url, httpOptions);
  }

  listeStatut(): Observable<Statut[]>{
    const url = `${this.apiURL}/all`;
  return this.http.get<Statut[]>(url);
  }
  supprimerStatut(id : number) {
    const url = `${this.apiURL}/delete/${id}`;
    return this.http.delete(url, httpOptions);
    }


  addStatut(newStatut: Statut):Observable<Statut>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Statut>(url, newStatut, httpOptions);
     }

}


