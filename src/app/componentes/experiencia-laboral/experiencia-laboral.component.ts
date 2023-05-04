import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { ExperienciasService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  name: string = '';
  description: string = '';
  loading: boolean = false;
  listExperiencias: Experiencia[] = []

  constructor(private _experienciaLaboralService: ExperienciasService) { }

  ngOnInit(): void {
    this.getAptitudes();
  }

  getAptitudes() {
    this._experienciaLaboralService.getExperiencias().subscribe(data => {
      this.listExperiencias = data;
    })
  }

}
