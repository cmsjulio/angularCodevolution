import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <h2>
      Welcome, {{name}}
    </h2>
    <h2 class = "text-success">Codevolution</h2>
    <h2 [class] = "successClass">Codevolution</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2>

    <h2 [ngClass]="messageClasses">CSS class binding</h2>

    <h2 [style.color]="'orange'">Utiliza CSS properties após o 'style.' para editar css direto no HTML</h2>

    <h2 [style.color]="hasError ? 'red' : 'green' ">Tem erro? Se sim, red. Se não, verde. Ternário. </h2>

    <h2 [style.color]="highlightColor"> Binding com style e propriedade typescript. </h2>

    <h2 [ngStyle]="titleStyles"> Binding com ngStyle. </h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class Test2Component implements OnInit {

  public name = "Julio";

  public successClass = "text-success";

  public hasError = true;

  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public highlightColor = "orange";

  constructor() { }

  ngOnInit(): void {
  }

}
