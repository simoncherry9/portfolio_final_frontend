import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../interfaces/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://apiportfolio.fly.dev/'
    this.myApiUrl = 'api/experiencia'
  }

  Crear(experiencias: Experiencia): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, experiencias);
  }

  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.myAppUrl}${this, this.myApiUrl}`)
  }

  deleteExperiencia(id: number): Observable<any> {
    const url = `${this.myAppUrl}${this,this.myApiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
