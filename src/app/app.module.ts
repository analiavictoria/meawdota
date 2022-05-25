//Segundo arquivo a ser chamado

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/adote/cards/cards.component';
import { ToolbarComponent } from './components/adote/toolbar/toolbar.component';
import { FlexLayoutModule } from "@angular/flex-layout";

//Material 
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule} from '@angular/material/chips';
import { MatListModule} from '@angular/material/list';
import { ConhecerComponent } from './components/adote/conhecer/conhecer.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

@NgModule({
  //5 atributos para configurar um módulo
  
  //1. Declarar todos os componentes que fazem parte do módulo, diretivas e pipes
  declarations: [
    AppComponent,
    CardsComponent,
    ToolbarComponent,
    ConhecerComponent,
  ],
  //2. Exports

  //3. Importar outros módulos (a, b, c...)
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatChipsModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //4. Declarar os services
  providers: [],
  //5. Define o componente a ser carregado
  bootstrap: [AppComponent] //aponta o módulo inicial da aplicação
})
export class AppModule { }