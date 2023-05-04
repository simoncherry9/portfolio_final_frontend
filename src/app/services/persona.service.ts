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
    this.myAppUrl = 'http://localhost:3001/'
    this.myApiUrl = 'api/persona'
  }

  Crear(personas: Personas): Observable <any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, personas);
  }

  getPersonas(): Observable <Personas[]> {
    return this.http.get<Personas[]>(`${this.myAppUrl}${this,this.myApiUrl}`)
  }

}