import { Component, OnInit } from '@angular/core';



/*

  about property binding: 

  atributes and properties are not the same.

  Atributes - HTML

  Properties - DOM (Document Object Model)

  Attributes initialize DOM properties and then they are done. They cannot change.

  Property values CAN change.

*/

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

  <input [id]="myId" type="text" value="Vishwas">
  <input [disabled]="isDisabled" id={{myId}} type="text" value="Vishwas">
  <input bind-disabled="isDisabled2" id={{myId2}} type="text" value="Rahs">


  `, //can be used as 'template'

  // we cannot use interpolation to assign variables, as in {{a = 2+2}}
  // we also dont have access to global variables, as tried in {{window.location.href}}, we can create a new variable
  //    in this class, bind it to window.location.href, and the call it via interpolation.

  // if we dont use property binding -- by using [disable], e.g. --, the html may
  //    not set the property we want it to set.

  styleUrls: ['./test.component.scss'] //pointing to the css config, can be called directly by using 'style'
})
export class TestComponent implements OnInit {

  public name = "Codevolution"; // criando variável para ser chamada no html
  // para chamar, usar {{name}}, que é o conceito de interpolation.

  public myId = "testID"; // we will bind this to an html property of the input element.

  public myId2 = "testID2";

  public isDisabled = false; // we will bind disabled to this property;

  public isDisabled2 = true; // bindado de outra forma, com bind-disabled

  constructor() { }

  ngOnInit(): void {
  }

  helloUser(): string {
    return "Hello, " + this.name;
  }

}
