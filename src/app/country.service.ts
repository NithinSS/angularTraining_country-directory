import { Injectable } from '@angular/core';
import { Country } from './country';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl = "https://restcountries.eu/rest/v2/";

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl+"all")
    .pipe (
      tap(_ => console.log("Fetched all Countries"))
    );
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl+"name/"+name+"?fullText=true")
    .pipe (
      tap(_ => console.log("Fetched details of "+name))
    );
  }
}
