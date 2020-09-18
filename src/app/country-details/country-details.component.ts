import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;

  constructor(private countryService: CountryService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getCountryByName();
  }

  getCountryByName(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountryByName(name)
    .subscribe(country => this.country = country[0]);
  }

}
