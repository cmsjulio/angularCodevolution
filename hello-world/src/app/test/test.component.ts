import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test', //can be stated and called in other ways
  templateUrl: './test.component.html', //can be used as 'template'
  styleUrls: ['./test.component.scss'] //pointing to the css config, can be called directly by using 'style'
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
