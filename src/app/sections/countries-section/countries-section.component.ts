import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LangService } from 'src/app/services/langs';

@Component({
  selector: 'app-countries-section',
  templateUrl: './countries-section.component.html',
  styleUrls: ['./countries-section.component.css']
})
export class CountriesSectionComponent implements OnInit {
  
  countries = new MatTableDataSource([])
  displayedColumns: string[] = ['name', 'code'];
  constructor(public langService:LangService) {
    langService.selectedLang.code
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.countries.filter = filterValue.trim().toLowerCase();
  }

}
