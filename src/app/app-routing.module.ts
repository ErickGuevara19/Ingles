import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pagesrouting.module';

const routes :Routes =[

  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  //{path:'**',component: NofoundPagesComponent},
]

@NgModule({
  imports: [
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
