import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coleccion1Component } from './coleccion1/coleccion1.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';




@NgModule({
  declarations: [Coleccion1Component,DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  exports:[Coleccion1Component, DashboardComponent],

})
export class PagesModule { }
