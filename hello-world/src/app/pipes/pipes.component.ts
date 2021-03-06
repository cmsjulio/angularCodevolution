import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `

    <h2>{{ name }} </h2>  
    <h2>{{ name | lowercase}} </h2>  
    <h2>{{ name | uppercase}} </h2>  
    <h2>{{ message | titlecase}} </h2>  
    <h2>{{ name | slice:0:4 }}</h2>
    <h2>{{ person | json }}</h2>

    <h2>{{5.678 | number: '1.2-3'}}</h2>
    <h2>{{5.678 | number: '3.4-5'}}</h2>
    <h2>{{5.678 | number: '3.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>

    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency: 'GBP'}}</h2>
    <h2>{{0.25 | currency: 'BRL'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    <h2>{{date | date:'medium'}}</h2>
  
    `,
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public name = "Julio";
  public message = "Welcome, my friend."
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
