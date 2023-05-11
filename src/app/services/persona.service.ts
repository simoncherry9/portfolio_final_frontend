import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personas } from '../interfaces/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://apiportfolio.fly.dev/'
    this.myApiUrl = 'api/persona'
  }

  getPersonas(): Observable <Personas[]> {
    return this.http.get<Personas[]>(`${this.myAppUrl}${this,this.myApiUrl}`)
  }

  editPersona(persona: Personas): Observable<Personas> {
    const url = `${this.myAppUrl}${this.myApiUrl}/${persona.id}`;
    return this.http.put<Personas>(url, persona);
  }

}