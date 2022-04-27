import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  template: `
    <h2>
    Welcome, {{name}}
    </h2>
    <button (click)="aoClicar($event)"> Greet </button>
    <button (click)="greeting='Welcome, Julio'"> Greet </button>
    {{greeting}}
  `,
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit {

  public name = "Julio";

  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }

  aoClicar(event: { type: any; }){
    console.log(event)
    this.greeting = event.type;
  }

}
