import { Component } from '@angular/core';
import { Personas } from 'src/app/interfaces/persona';
import { PersonasService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
  persona: Personas = {
  id: 0,
  nombre: '',
  apellido: '',
  direccion:  '',
  fechaNacimiento: '',
  estadoCivil: '',
  email: '',
  telefono:  '',
  profesion: '',
  rol:  '',}
  loading: boolean = false;
  listPersonas: Personas[] = []
  toastr: any;

constructor(private _personasService: PersonasService) { }

ngOnInit(): void {
  this.getPersonas();
}

getPersonas() {
  this._personasService.getPersonas().subscribe(data => {
    this.listPersonas = data;
  })
}

editPersona(persona: Personas) {

  this._personasService.editPersona(persona).subscribe(
    updatedPersona => {
      location.reload()
      this.toastr.success("La persona " + this.persona.nombre + " se pudo actualizar con exito", "Persona actualizada");
    },
    error => {
      this.toastr.error("La persona " + this.persona.nombre + " no se pudo actualizar con exito", "Error");
    }
  );
}
}
