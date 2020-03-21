import { Component, OnInit } from '@angular/core';
import { countries } from '../../../environments/counties';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-countries-section',
  templateUrl: './countries-section.component.html',
  styleUrls: ['./countries-section.component.css']
})
export class CountriesSectionComponent implements OnInit {

  countries = new MatTableDataSource(countries)
  displayedColumns: string[] = ['name', 'code'];
  constructor() {
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.countries.filter = filterValue.trim().toLowerCase();
  }

}
