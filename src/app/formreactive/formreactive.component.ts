import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
  showError:boolean=false;
  errorText:string="";
  inputId:number= 0;
  showChangeYearError:boolean=false;
  email:string = "";
  success:boolean = false;
  form:boolean = true;

 
  studentsForm = new FormGroup ({
    idControl: new FormControl(''),
    nameControl: new FormControl(''),
    lastNameControl: new FormControl(''),
    ageControl: new FormControl(''),
    tourControl: new FormControl('')
  });
  
  tours:string[]=["kapernaum","favor","jerusalem", "dead sea","sodom & gomor"];
  constructor() { }
  studentsArray: any = [
    
  ]
 
  ngOnInit(): void {
   this.studentsForm.patchValue({
     idControl: 1,
     ageControl: [],
   });
  }
 
  
  saveStudent(){
  
    var formValues=this.studentsForm.value;
    var studentId = formValues.idControl;
    var studentName = formValues.nameControl;
    var studentLastName = formValues.lastNameControl;
    var studentAge = formValues.ageControl;
    var studentTour = formValues.tourControl;
    
 
    if(studentName == ""||studentLastName == ""||studentTour == ""||studentAge=="")
    {
      this.showError = true;
      this.errorText = "fill all of the inputs";
    }
    
    else{
      this.showError = false;
      this.errorText = "";
      var findStudent = this.studentsArray.findIndex((e:any) => e.id == studentId);
      if(findStudent>=0){
       var element = this.studentsArray.find((e:any) => e.id == studentId);
       element.id=formValues.idControl;
       element.name=formValues.nameControl;
       element.lastName=formValues.lastNAmeControl;
       element.age=formValues.ageControl;
       element.tour=formValues.tourControl;
      }
      else{
      this.showError = false;
      this.errorText = "";
      this.studentsArray.push({id: formValues.idControl, name:  formValues.nameControl,
         lastName: formValues.lastNameControl, age: formValues.ageControl, tour: formValues.tourControl});
 
         this.studentsForm.patchValue({
          idControl: formValues.idControl + 1});
          this.email = formValues.nameControl + formValues.tourControl + formValues.idControl + "";
          this.success = true;
          this.form = false;
         
        }
    }
  }
};
