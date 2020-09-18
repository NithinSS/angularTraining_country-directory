import { Injectable } from '@angular/core';
import { Country } from './country';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl = "https://restcountries.eu/rest/v2/all";

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl)
    .pipe (
      tap(_ => console.log("Fetched Countries"))
    );
  }
}
