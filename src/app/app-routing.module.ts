import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './components/adote/cards/cards.component';
import { ConhecerComponent } from './components/adote/conhecer/conhecer.component';

const routes: Routes = [
  {path: 'cards', component:CardsComponent},
  {path: 'conhecer', component:ConhecerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
