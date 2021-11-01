import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent}from "./components/card/card.component"

const routes: Routes = [
   {
    path: '',
    component: CardComponent,
    children: [
      {
        path: 'movies',
        component: CardComponent,
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
