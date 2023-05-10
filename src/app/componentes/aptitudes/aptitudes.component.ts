import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Aptitudes } from 'src/app/interfaces/aptitudes';
import { AptitudesService } from 'src/app/services/aptitudes.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  aptitudes: Aptitudes = {
    id: 0,
    name: '',
    description: '',
    porcentaje: 0
  }
  loading: boolean = false;
  listAptitudes: Aptitudes[] = []

  constructor(private _aptitudesService: AptitudesService) { }

  ngOnInit() {
    this.getAptitudes();
    this._aptitudesService.getAptitudes().subscribe(data => {
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      const chartData = {
        datasets: [{
          data: data.map(item => item.porcentaje),
          label: 'Nivel',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }],
        labels: data.map(item => item.name )
      };

      Chart.register(...registerables);

      new Chart(ctx, {
        type: 'polarArea',
        data: chartData,
        options: {
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 100
            }
          }
        }
      });
    });
  }

  getAptitudes() {
    this._aptitudesService.getAptitudes().subscribe(data => {
      this.listAptitudes = data;
    });
  }

}