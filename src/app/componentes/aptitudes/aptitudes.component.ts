import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/interfaces/aptitudes';
import { AptitudesService } from 'src/app/services/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  name: string = '';
  description: string = '';
  loading: boolean = false;
  listAptitudes: Aptitudes[] = []

  constructor(private _aptitudesService: AptitudesService) { }

  ngOnInit(): void {
    this.getAptitudes();
  }

  getAptitudes() {
    this._aptitudesService.getAptitudes().subscribe(data => {
      this.listAptitudes = data;
    })
  }

}