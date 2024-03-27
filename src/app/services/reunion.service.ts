import { Reunion } from './../model/reunion.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ReunionService{

  apiURL: string ='http://localhost:8080//m2LReunion/api/reunion'
  reunion! : Reunion;
  constructor(private http : HttpClient) {
  }
  consulterReunion(id: number): Observable<Reunion> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Reunion>(url, httpOptions);
    }

    listeReunion(): Observable<Reunion[]>{
      const url = `${this.apiURL}/all`;
    return this.http.get<Reunion[]>(url);
    }

    supprimerReunion(id : number) {
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);
      }


    addReunion(newReunion: Reunion):Observable<Reunion>{
      const url = `${this.apiURL}/save`;
      return this.http.post<Reunion>(url, newReunion, httpOptions);
       }

}

