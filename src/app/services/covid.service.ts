import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidIndiaDetails() : Observable<any> {
    return this.http.get('https://api.covid19india.org/data.json');
  }


}
