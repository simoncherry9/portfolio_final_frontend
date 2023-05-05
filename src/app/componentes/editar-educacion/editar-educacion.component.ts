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
export class EditarEducacionComponent implements OnInit {
  establecimiento: string = '';
  nivel: string = '';
  fechaFin: string = '';
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
    if (this.nivel == '' || this.establecimiento == '' || this.fechaFin == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    // Creamos el objeto 
    const educacions: Educacion = {
      nivel: this.nivel,
      establecimiento: this.establecimiento,
      fechaFin: this.fechaFin
    }

    this.loading = true;

    this._educacionService.Crear(educacions).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("El establecimiento " + this.establecimiento + " fue cargado con exito", "Educación agregada");
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