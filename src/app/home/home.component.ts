import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona-service';
import { GlobalStatistics } from '../models/globalstatistics';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    global_data: GlobalStatistics = null
    constructor(private coronaServ: CoronaService) { }

    ngOnInit() {
        this.coronaServ.getGlobalStatistics().subscribe(data=>{
            this.global_data = data
        })
    }
}
