import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills-component',
  templateUrl: './skills-component.component.html',
  styleUrls: ['./skills-component.component.scss']
})

export class SkillsComponentComponent implements OnInit {
  control = new FormControl(['some','value']);

  group = new FormGroup ({
  });

  constructor() { }

  ngOnInit(): void {
  }

}
