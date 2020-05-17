import { Component, OnInit } from '@angular/core';
import { DataServicesService } from 'src/app/service/data-services.service';
import { GlobalDataSummary } from 'src/app/models/global-data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalActive =0;
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData : GlobalDataSummary[] ;
  constructor(private dataService: DataServicesService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData()
    .subscribe({
      next: (result)=>{
        console.log(result);
        this.globalData = result;
        result.forEach(cs=>{
          if(!Number.isNaN(cs.confirmed))
            this.totalActive+=cs.active;
            this.totalConfirmed+=cs.confirmed;
            this.totalDeaths+=cs.deaths;
            this.totalRecovered+=cs.recovered;
        })
      }
    }
  )
  }

}
