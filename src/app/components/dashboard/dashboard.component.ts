import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  source: String = 'api.covid19india.org';
  states: any[] = [];
  delta = true;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covidService.getCovidIndiaDetails().subscribe((response) => {
      this.states = response.statewise;
    })
  }

  toggleDelta() {
    this.delta = !this.delta;
  }

}
