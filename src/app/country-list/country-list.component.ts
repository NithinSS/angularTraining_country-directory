import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { MatTableDataSource } from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  displayArray = ['name', 'region', 'capital'];
  dataSource = new MatTableDataSource<Country>(this.countries);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(countries => this.dataSource.data = countries as Country[]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toCountry(row: string): void {
    console.log("Go to "+row);
  }
}
