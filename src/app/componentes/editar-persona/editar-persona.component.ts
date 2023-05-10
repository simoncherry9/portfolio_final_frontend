import { Component } from '@angular/core';
import { Personas } from 'src/app/interfaces/persona';
import { PersonasService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
  name: string = '';
  description: string = '';
  direccion: string = '';
  fechaNacimiento: string = '';
  estadoCivil: string = '';
  email: string = '';
  telefono: string = '';
  profesion: string = '';
  rol: string= '';
  loading: boolean = false;
  listPersonas: Personas[] = []

constructor(private _personasService: PersonasService) { }

ngOnInit(): void {
  this.getPersonas();
}

getPersonas() {
  this._personasService.getPersonas().subscribe(data => {
    this.listPersonas = data;
  })
}
}
