import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {


  loginForm = new FormGroup({
    name1:new FormControl('Ankit'),
    email1: new FormControl('Ankit@gmail.com'),
  });

  getForm2(){
    console.log(this.loginForm.value);
    
  }
}
