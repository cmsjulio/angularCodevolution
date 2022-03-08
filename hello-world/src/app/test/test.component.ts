import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', //can be stated and called in other ways
  template: `
  
  <h2>
    Welcome {{name}}
  </h2>  
  <h2>
    {{2+2}}
  </h2>

  <h2>
    {{"Welcome, " +  name}}
  </h2>

  <h2>
    {{name.length}}
  </h2>

  <h2>
    {{name.toUpperCase()}}
  </h2>

  <h2>
    {{helloUser()}}
  </h2>
  `, //can be used as 'template'

  // we cannot use interpolation to assign variables, as in {{a = 2+2}}
  // we also dont have access to global variables, as tried in {{window.location.href}}, we can create a new variable
  //    in this class, bind it to window.location.href, and the call it via interpolation.

  styleUrls: ['./test.component.scss'] //pointing to the css config, can be called directly by using 'style'
})
export class TestComponent implements OnInit {

  public name = "Codevolution"; // criando variável para ser chamada no html
  // para chamar, usar {{name}}, que é o conceito de interpolation.

  constructor() { }

  ngOnInit(): void {
  }

  helloUser(): string {
    return "Hello, " + this.name;
  }

}
