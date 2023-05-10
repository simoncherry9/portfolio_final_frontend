import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formulario } from 'src/app/interfaces/formulario';
import { ErrorService } from 'src/app/services/error.service';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombre: string = '';
  email: string = '';
  descripcion: string = '';
  loading: boolean = false;

  constructor(private router: Router,
    private toastr: ToastrService,
    private _formularioService: FormularioService,
    private _errorService: ErrorService) {} 

  ngOnInit(): void {
      
  }

  addFormulario() {

    if (this.nombre == '' || this.email == '' || this.descripcion == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    const formulario: Formulario = {
      nombre: this.nombre,
      email: this.email,
      descripcion: this.descripcion,
    }

    this.loading = true;

    this._formularioService.Crear(formulario).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success("El formulario se ha cargado con exito", "¡Enviado!");
        return
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }

}