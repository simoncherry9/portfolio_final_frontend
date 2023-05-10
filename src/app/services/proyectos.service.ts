import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyectos } from '../interfaces/proyectos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3001/'
    this.myApiUrl = 'api/proyectos'
  }

  Crear(proyectos: Proyectos): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, proyectos);
  }

  getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.myAppUrl}${this, this.myApiUrl}`)
  }

  deleteProyecto(id: number): Observable<any> {
    const url = `${this.myAppUrl}${this,this.myApiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
