import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../model/utilisateur.model';


const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'

})
export class UtilisateurService {

  apiURL: string = 'http://localhost:8080/m2lFormation/api/utilisateur'
  utilisateur!: Utilisateur[]

  constructor(private http : HttpClient) {  }



updateUtilisateur(form :Utilisateur) : Observable<Utilisateur>
{
      return this.http.put<Utilisateur>(this.apiURL, form, httpOptions);
}

consulterUtilisateur(id: number): Observable<Utilisateur> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Utilisateur>(url, httpOptions);
  }

  listeUtilisateur(): Observable<Utilisateur[]>{
    const url = `${this.apiURL}/all`;
  return this.http.get<Utilisateur[]>(url);
  }
  supprimerUtilisateur(id : number) {
    const url = `${this.apiURL}/delete/${id}`;
    return this.http.delete(url, httpOptions);
    }


  addUtilisateur(newUtilisateur: Utilisateur):Observable<Utilisateur>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Utilisateur>(url, newUtilisateur, httpOptions);
     }

}




