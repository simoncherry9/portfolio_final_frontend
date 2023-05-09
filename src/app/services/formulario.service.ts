import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formulario } from '../interfaces/formulario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3001/'
    this.myApiUrl = 'api/formulario'
  }

  Crear(formulario: Formulario): Observable <any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, formulario);
  }

}