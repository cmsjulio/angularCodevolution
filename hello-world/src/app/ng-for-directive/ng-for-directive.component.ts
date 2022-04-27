import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-directive',
  template: `
  
    <p> Conseguimos utilizar alguns parâmetros pré-definidos, como o index, que retorna a posição do item na iteração, a iniciar por 0:</p>

     <div *ngFor = "let color of colors; index as i">
      <h3>{{i}} {{color}}</h3>
     </div>

     <p> O parâmetro pré-definido first retorna True quando o elemento for o primeiro:</p>

     <div *ngFor = "let color of colors; first as f">
      <h3>{{f}} {{color}}</h3>
     </div>

     <p> O parâmetro pré-definido last retorna True quando o elemento for o último:</p>

     <div *ngFor = "let color of colors; last as l">
      <h3>{{l}} {{color}}</h3>
     </div>

     <p> O parâmetro pré-definido odd retorna True quando o index do elemento for ímpar:</p>

     <div *ngFor = "let color of colors; odd as o">
      <h3>{{o}} {{color}}</h3>
     </div>

     <p> O parâmetro pré-definido even retorna True quando o index do elemento for par:</p>

     <div *ngFor = "let color of colors; even as e">
      <h3>{{e}} {{color}}</h3>
     </div>
  `,
  styleUrls: ['./ng-for-directive.component.scss']
})
export class NgForDirectiveComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"]

  constructor() { }

  ngOnInit(): void {
  }

}
