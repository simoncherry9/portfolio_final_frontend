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
export class EditarExperienciasComponent implements OnInit {
  empresa: string = '';
  puesto: string = '';
  descripcion: string = '';
  fechaFin: string = '';
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
    if (this.empresa == '' || this.puesto == '' || this.descripcion == '' || this.fechaFin == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    // Creamos el objeto 
    const experiencias: Experiencia = {
      empresa: this.empresa,
      puesto: this.puesto,
      descripcion: this.descripcion,
      fechaFin: this.fechaFin
    }

    this.loading = true;

    this._experienciaService.Crear(experiencias).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("La experiencia laboral " + this.puesto + " fue cargada con exito", "Experiencia agregada");
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