import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aptitudes } from 'src/app/interfaces/aptitudes';
import { ErrorService } from 'src/app/services/error.service';
import { AptitudesService } from 'src/app/services/aptitudes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  name: string = '';
  description: string = '';
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
    if (this.name == '' || this.description == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    // Creamos el objeto 
    const aptitudes: Aptitudes = {
      name: this.name,
      description: this.description
    }

    this.loading = true;

    this._aptitudesService.Crear(aptitudes).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("La aptitud " + this.name + " fue cargada con exito", "Aptitud agregada");
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
