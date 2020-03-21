import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CountryStaticsComponent } from './country-statics/country-statics.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'country/:code',          component: CountryStaticsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      // useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
