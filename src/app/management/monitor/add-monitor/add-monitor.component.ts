import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MONITOR_FORM } from "src/app/management/monitor/add-monitor/monitor-form";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-monitor',
  templateUrl: './add-monitor.component.html',
  styleUrls: ['./add-monitor.component.scss']
})
export class AddMonitorComponent implements OnInit {

  monitorForm:FormGroup=MONITOR_FORM.create();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.monitorForm.valid){
      console.log(this.monitorForm.getRawValue());
      this.router.navigate(['monitor/list-monitor'])
    }
  }
}
