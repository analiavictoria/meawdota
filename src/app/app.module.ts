//Segundo arquivo a ser chamado

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  //5 atributos para configurar um módulo
  
  //1. Declarar todos os componentes que fazem parte do módulo, diretivas e pipes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //2. Exports

  //3. Importar outros módulos (a, b, c...)
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],

  //4. Declarar os services
  providers: [],

  //5. Define o componente a ser carregado
  bootstrap: [AppComponent] //aponta o módulo inicial da aplicação
})
export class AppModule { }
