import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aptitudes } from '../interfaces/aptitudes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://apiportfolio.fly.dev/'
    this.myApiUrl = 'api/aptitudes'
  }

  Crear(aptitudes: Aptitudes): Observable <any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, aptitudes);
  }

  getAptitudes(): Observable <Aptitudes[]> {
    return this.http.get<Aptitudes[]>(`${this.myAppUrl}${this,this.myApiUrl}`)
  }

  deleteAptitud(id: number): Observable<any> {
    const url = `${this.myAppUrl}${this,this.myApiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}