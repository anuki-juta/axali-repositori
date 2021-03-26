import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];

  searchText: string="";


  constructor() { }

  ngOnInit(): void {
  }

}
