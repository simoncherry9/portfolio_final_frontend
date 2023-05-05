import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  name: string = '';
  description: string = '';
  tecnologias: string = '';
  linkRepo: string = '';
  loading: boolean = false;
  listProyectos: Proyectos[] = []

  constructor(private _proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos() {
    this._proyectosService.getProyectos().subscribe(data => {
      this.listProyectos = data;
    })
  }

}
