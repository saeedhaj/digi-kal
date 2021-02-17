import { Component, OnInit } from '@angular/core';
import { FormGroup, } from "@angular/forms";
import { ADD_FORM } from "./add-form";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.scss']
})
export class AddLaptopComponent implements OnInit {

  addForm:FormGroup=ADD_FORM.create();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
if(this.addForm.valid){
  console.log(this.addForm.getRawValue());
  this.router.navigate(['/list-laptop'])
}
  }
}
