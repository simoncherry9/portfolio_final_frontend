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
export class EditarProyectosComponent {
  proyecto: Proyectos = {
    id: 0,
    name: '',
    description: '',
    tecnologias: '',
    linkRepo: '',
  }
  loading: boolean = false;
  listProyectos: Proyectos[] = []

  constructor(private toastr: ToastrService,
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

    if (this.proyecto.name == '' || this.proyecto.description == '' || this.proyecto.tecnologias == '' || this.proyecto.linkRepo == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    this.loading = true;

    this._proyectosService.Crear(this.proyecto).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("El proyecto " + this.proyecto.name + " fue cargado con exito", "Proyecto agregado");
        this.router.navigate(['/editar']);
        location.reload()
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })

  }

  deleteProyecto(id: number) {
    this._proyectosService.deleteProyecto(id).subscribe(
      () => {
        console.log('Experiencia eliminada correctamente');
        location.reload()
        this.toastr.success("El proyecto " + this.proyecto.name + " fue eliminado con exito", "Proyecto eliminado");
      },
      (error) => {
        this.toastr.error("El pryecto no pudo eliminarse", "Error");
      }
    );
  }

}