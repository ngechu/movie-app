import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ViewCardDetailsComponent } from './components/view-card-details/view-card-details.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'view/:id',
    component: ViewCardDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
