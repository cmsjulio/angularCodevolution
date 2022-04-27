import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-directive',
  template: `
    <h2 *ngIf="true">
      CCA-Teste *ngIf= "true"
    </h2>
    <h2 *ngIf="false">
      CCA-Teste *ngIf= "false"
    </h2>

    <div *ngIf="mostrarNome; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
    <h3>
      *ngIf utilizando atributo mostrarNome e #thenBlock e #elseBlock.
    </h3>
      </ng-template>
    

    <ng-template #elseBlock>
    <h3>
      Nome está escondido.
      O ng-template é um container para outros elementos que o ngIf pode utilizar em sua lógica.
    </h3>
    </ng-template>

    <button (click)="switchMostrarNome()">Mostrar/Esconder</button>
    {{mostrarNome}}
  `,
  styleUrls: ['./ng-if-directive.component.scss']
})
export class NgIfDirectiveComponent implements OnInit {

  mostrarNome = true;

  constructor() { }

  ngOnInit(): void {
  }

  switchMostrarNome(){

    this.mostrarNome = !this.mostrarNome;

  }

}
