import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/services/error.service';
import { Experiencia } from 'src/app/interfaces/experiencia';
import { ExperienciasService } from 'src/app/services/experiencia.service';


@Component({
  selector: 'app-editar-experiencias',
  templateUrl: './editar-experiencias.component.html',
  styleUrls: ['./editar-experiencias.component.css']
})
export class EditarExperienciasComponent {
  experiencia: Experiencia = {
    id : 0,
    empresa: '',
    puesto: '',
    descripcion: '',
    fechaFin: '',
  }
  loading: boolean = false;
  listExperiencias: Experiencia[] = []

  constructor( private toastr: ToastrService,
    private _experienciaService: ExperienciasService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias() {
    this._experienciaService.getExperiencias().subscribe(data => {
      this.listExperiencias = data;
    })
  }

  addExperiencia() {

    // Validamos que el usuario ingrese valores
    if (this.experiencia.empresa == '' || this.experiencia.puesto == '' || this.experiencia.descripcion == '' || this.experiencia.fechaFin == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    this.loading = true;

    this._experienciaService.Crear(this.experiencia).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("La experiencia obtenida en empresa " + this.experiencia.empresa + " fue cargada con exito", "Experiencia agregada");
        this.router.navigate(['/editar']);
        location.reload()
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

  deleteExperiencia(id: number) {
    this._experienciaService.deleteExperiencia(id).subscribe(
      () => {
        console.log('Experiencia eliminada correctamente');
        location.reload()
        // Realizar cualquier otra acción necesaria después de eliminar la aptitud
      },
      (error) => {
        console.error('Error al eliminar la experiencia', error);
        // Manejar el error adecuadamente
      }
    );
  }

}