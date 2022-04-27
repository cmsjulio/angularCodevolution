import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  template: `
    <h2>
      Welcome, {{name}}
    </h2>
    <input #myInput type="text">
    <button (click)="logMessage(myInput)">Log</button>
  `,
  styleUrls: ['./template-reference-variables.component.scss']
})
export class TemplateReferenceVariablesComponent implements OnInit {

  constructor() { }

  public name = "Julio Malvadão."

  ngOnInit(): void {
  }

  logMessage(mensagem: any){
    console.log(mensagem)
    this.name = mensagem.value
  }

}
