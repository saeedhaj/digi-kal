import { FormGroup,FormControl,Validators } from "@angular/forms";
export const ADD_FORM={
    create:()=>{
        return new FormGroup({
            name:new FormControl('',[Validators.required]),
            color:new FormControl('',[Validators.required]),
            size:new FormControl('',[Validators.required]),
        })
    }
}