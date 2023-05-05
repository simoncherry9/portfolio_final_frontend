import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/interfaces/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  establecimiento: string = '';
  nivel: string = '';
  fechaFin: string = '';
  loading: boolean = false;
  listEducaciones: Educacion[] = []

  constructor(private _educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
  }

  getEducaciones() {
    this._educacionService.getEducaciones().subscribe(data => {
      this.listEducaciones = data;
    })
  }

}
