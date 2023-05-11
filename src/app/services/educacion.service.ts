import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../interfaces/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://apiportfolio.fly.dev/'
    this.myApiUrl = 'api/educacion'
  }

  Crear(educacions: Educacion): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, educacions);
  }

  getEducaciones(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.myAppUrl}${this, this.myApiUrl}`)
  }

  deleteEducacion(id: number): Observable<any> {
    const url = `${this.myAppUrl}${this,this.myApiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
