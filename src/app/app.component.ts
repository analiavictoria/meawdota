//A partir deste arquivo toda a árvore de componentes é chamada
//Componente é um pedaço (trecho de código) dentro da aplicação

import { Component } from '@angular/core';


//Componente Angular: HTML (estrutura), CSS (estilo) e Typescript (comportamento)
@Component({
  selector: 'app-root', //tag que encapsula e referencia
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
