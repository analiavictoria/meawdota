import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AdoteComponent } from './pages/adote/adote.component';
import { ApoieComponent } from './pages/apoie/apoie.component';
import { LoginComponent } from './pages/login/login.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { CardsComponent } from './pages/adote/cards/cards.component';
import { ConhecerComponent } from './pages/adote/conhecer/conhecer.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adote', component: AdoteComponent},
  {path: 'apoie', component: ApoieComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'conhecer', component:ConhecerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





