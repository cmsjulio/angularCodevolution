import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-directive',
  template: `

    <div [ngSwitch] = "color">
      <div *ngSwitchCase="'red'"> Você escolheu a cor vermelha. </div>
      <div *ngSwitchCase="'blue'"> Você escolheu a cor azul. </div>
      <div *ngSwitchCase="'green'"> Você escolheu a cor verde. </div>
      <div *ngSwitchDefault> Não existe cor {{color}} </div>
    </div>

    <div>
      <input #myInput type="text">
      <button (click)="logCor(myInput)">Escolher cor</button>
    </div>

  `,
  styleUrls: ['./ng-switch-directive.component.scss']
})
export class NgSwitchDirectiveComponent implements OnInit {

  public color = "green";

  constructor() { }

  ngOnInit(): void {
  }

  logCor(input: any){
    this.color = input.value;
  }

}
