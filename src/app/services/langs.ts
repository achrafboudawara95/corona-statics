import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';
import { countries } from '../../environments/counties';

@Injectable({
    providedIn: 'root'
  })
export class LangService {
    constructor(private translate: TranslateService){
        const code=localStorage.getItem('corona-virus-lang')
        if(code != null)
        {
            this.selectLang(code)
        }
    }

    private private_countries = new MatTableDataSource([])
    public langs=[
        {icon: "assets/img/icons/flags/US.png", code:"en", label:"English", selected:true},
        {icon: "assets/img/icons/flags/FR.png", code:"fr", label:"Français", selected:false},
        {icon: "assets/img/icons/flags/AR.png", code:"ar", label:"عربي", selected:false}
    ]

    selectLang(code){
        let index = this.langs.findIndex(lang => {return lang.selected === true})
        this.langs[index].selected=false
        index = this.langs.findIndex(lang => {return lang.code == code})
        this.langs[index].selected=true
        this.translate.use(code);
        localStorage.setItem('corona-virus-lang', code)
        this.private_countries = new MatTableDataSource(countries[this.selectedLang.code])
    }

    get selectedLang(): any {
        return this.langs.find(lang => {return lang.selected === true})
    }

    get unselectedLangs(): any {
        return this.langs.filter(lang => {return lang.selected === false})
    }

    get countries(): any {
        return this.private_countries
    }
}