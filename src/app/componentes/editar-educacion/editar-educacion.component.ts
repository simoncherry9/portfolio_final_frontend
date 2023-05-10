import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/services/educacion.service';


@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent {
  educacion: Educacion = {
    id : 0,
    fechaFin: '',
    establecimiento: '',
    nivel: '',
  }
  loading: boolean = false;
  listEducaciones: Educacion[] = []

  constructor( private toastr: ToastrService,
    private _educacionService: EducacionService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
    this.getEducaciones();
  }

  getEducaciones() {
    this._educacionService.getEducaciones().subscribe(data => {
      this.listEducaciones = data;
    })
  }

  addEducacion() {

    // Validamos que el usuario ingrese valores
    if (this.educacion.establecimiento == '' || this.educacion.fechaFin == '' || this.educacion.nivel == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    this.loading = true;

    this._educacionService.Crear(this.educacion).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("La educacion en el establecimiento " + this.educacion.establecimiento + " fue cargada con exito", "Educacion agregada");
        location.reload()
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

  deleteEducacion(id: number) {
    this._educacionService.deleteEducacion(id).subscribe(
      () => {
        this.toastr.success("La educacion en el establecimiento " + this.educacion.establecimiento + " fue eliminada con exito", "Educacion eliminada");
        location.reload()
        // Realizar cualquier otra acción necesaria después de eliminar la aptitud
      },
      (error) => {
        console.error('Error al eliminar la educacion', error);
        // Manejar el error adecuadamente
      }
    );
  }
}