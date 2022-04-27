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

    <h2 [ngClass]="messageClasses">Codevolution</h2>
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

  constructor() { }

  ngOnInit(): void {
  }

}
