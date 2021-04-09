import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
 form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),

    password: new FormControl('')
   });
    constructor() { }
  
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
    }
  
    onSubmit(){
      alert(JSON.stringify( this.form.value));
    }
 
}