import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { Proyectos } from 'src/app/interfaces/proyectos';
import { ProyectosService } from 'src/app/services/proyectos.service';


@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
    name: string = '';
    description: string = '';
    tecnologias: string = '';
    linkRepo: string = '';
  loading: boolean = false;
  listProyectos: Proyectos[] = []

  constructor( private toastr: ToastrService,
    private _proyectosService: ProyectosService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos() {
    this._proyectosService.getProyectos().subscribe(data => {
      this.listProyectos = data;
    })
  }

  addProyecto() {

    // Validamos que el usuario ingrese valores
    if (this.name == '' || this.description == '' || this.tecnologias == '' || this.linkRepo == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    // Creamos el objeto 
    const proyectos: Proyectos = {
      name: this.name,
      description: this.description,
      tecnologias: this.tecnologias,
      linkRepo: this.linkRepo
    }

    this.loading = true;

    this._proyectosService.Crear(proyectos).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("El proyecto " + this.name + " fue cargado con exito", "Proyecto agregado");
        this.router.navigate(['/editar']);
        location.reload()
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })

  }
}