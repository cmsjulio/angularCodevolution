import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <h2>{{"Hello, " + name}}</h2>
    <h3> Componente filho recebe parentData do componente pai contendo variável "julio" e reutiliza.</h3>
    <button (click)="fireEvent()"> Send Event</button>
  `,
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {

  // para recebimento de pai para filho
  @Input('parentData') //input decorator para declara que esta variável vem de outro componente.
  public name: any; //utilizando esta forma, já importamos parentData com novo nome de variável "name"

  // para envios do filho para o pai
  @Output()
  public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Mensagem enviada de pai pra filho via EventEmitter.');
  }

}
