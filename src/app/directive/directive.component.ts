import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  stringArray=[
    "Hello",
    "This is Text",
    "My string",
    "piakbuuu"
  ];


  stringArray2=[
    "Helalo",
    "This is Text",
    "My string",
    "piakbuuu"
  ];
  constructor() { }

  ngOnInit(): void {
  }
hasA (text : string): boolean
{
  if (text.indexOf("a")> -1 || text.indexOf("A")> -1)

  return true
  else return false;
}
}
