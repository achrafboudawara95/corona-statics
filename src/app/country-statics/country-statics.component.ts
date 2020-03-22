import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CoronaService } from '../services/corona-service';
import { CountrydataEntity } from '../models/countrystatistics';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LangService } from '../services/langs';

@Component({
  selector: 'app-country-statics',
  templateUrl: './country-statics.component.html',
  styleUrls: ['./country-statics.component.css']
})
export class CountryStaticsComponent implements OnInit {
  @ViewChild('ErrorModal') ErrorModal;
  private modalRef;
  country_data: CountrydataEntity = null
  constructor(public langService:LangService, private route: ActivatedRoute, private coronaServ: CoronaService, private modalService: NgbModal) { }

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get("code")
    this.coronaServ.getCountryStatistics(code).subscribe(data=>{
      this.country_data = data
    }
    ,()=>{
      this.openErrorModal()
    })
  }

  openErrorModal() {
    this.modalRef = this.modalService.open(this.ErrorModal, { windowClass: 'modal-danger', centered: true })
  }
}
