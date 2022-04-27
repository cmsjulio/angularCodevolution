import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit(): void {
  }

}
