import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aptitudes } from 'src/app/interfaces/aptitudes';
import { ErrorService } from 'src/app/services/error.service';
import { AptitudesService } from 'src/app/services/aptitudes.service';

@Component({
  selector: 'app-editar-aptitudes',
  templateUrl: './editar-aptitudes.component.html',
  styleUrls: ['./editar-aptitudes.component.css']
})
export class EditarAptitudesComponent {
  aptitudes: Aptitudes = {
    id : 0,
    name: '',
    description: '',
    porcentaje: 0
  }
  loading: boolean = false;
  listAptitudes: Aptitudes[] = []

  constructor(private toastr: ToastrService,
    private _aptitudesService: AptitudesService,
    private router: Router,
    private _errorService: ErrorService) { }

  ngOnInit(): void {
    this.getAptitudes();
  }

  getAptitudes() {
    this._aptitudesService.getAptitudes().subscribe(data => {
      this.listAptitudes = data;
    })
  }

  addAptitud() {

    // Validamos que el usuario ingrese valores
    if (this.aptitudes.name == '' || this.aptitudes.description == '' || this.aptitudes.porcentaje == 0) {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    this.loading = true;

    this._aptitudesService.Crear(this.aptitudes).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("La aptitud " + this.aptitudes.name + " fue cargada con exito", "Aptitud agregada");
        this.router.navigate(['/editar']);
        location.reload()
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

  deleteAptitud(id: number) {
    this._aptitudesService.deleteAptitud(id).subscribe(
      () => {
        console.log('Aptitud eliminada correctamente');
        location.reload()
        // Realizar cualquier otra acción necesaria después de eliminar la aptitud
      },
      (error) => {
        console.error('Error al eliminar la aptitud', error);
        // Manejar el error adecuadamente
      }
    );
  }

}