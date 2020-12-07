import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mobile: ['',Validators.required,Validators.maxLength(10)],
      pswd: ['', [Validators.required, Validators.minLength(6)]],
      cpswd: ['', Validators.required]
    });

  }
  register(){
    console.log("save")
  }

 get f() {
   console.log("inside getter",this.registerForm.controls)
  return this.registerForm.controls
 }

}





