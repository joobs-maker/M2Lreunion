
import { Adresse } from './../model/adresse.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  apiURL: string = 'http://localhost:8080//m2LReunion/api/adresse';
  adresse! : Adresse;
  constructor(private http : HttpClient) {
  }

  updateAdresse(form :Adresse) : Observable<Adresse>
  {
        return this.http.put<Adresse>(this.apiURL, form, httpOptions);
  }

  consulterAdresse(id: number): Observable<Adresse> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Adresse>(url, httpOptions);
    }

    listeAdresse(): Observable<Adresse[]>{
      const url = `${this.apiURL}/all`;
    return this.http.get<Adresse[]>(url);
    }
    supprimerAdresse(id : number) {
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);
      }


    addAdresse(newAdresse: Adresse):Observable<Adresse>{
      const url = `${this.apiURL}/save`;
      return this.http.post<Adresse>(url, newAdresse, httpOptions);
       }

}

