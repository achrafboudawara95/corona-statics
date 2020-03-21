import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";
import { CountrydataEntity } from '../models/countrystatistics';
import { Observable } from 'rxjs';
import { GlobalStatistics } from '../models/globalstatistics';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  private base_url = "https://thevirustracker.com/free-api"

  constructor(private http: HttpClient) { }

  getCountryStatistics(country_code:string) {
      return this.http.get<CountrydataEntity[]>(`${this.base_url}?countryTotal=${country_code}`)
      .pipe(map(data => {
        return data['countrydata'][0]
      }))
  }

  getGlobalStatistics() {
    return this.http.get<GlobalStatistics>(`${this.base_url}?global=stats`)
      .pipe(map(data => {
        return data['results'][0]
      }))
  }
}
