import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-monitor',
  templateUrl: './list-monitor.component.html',
  styleUrls: ['./list-monitor.component.scss']
})
export class ListMonitorComponent implements OnInit {

  monitorColumns:any[]=[
    {
      name:'monitorName',
      color:'color',
      size:'size',
      country: 'UK'
    }
  ];
  
  monitorRows:any[]=[
    {
      titleName:'lg',
      titleColor:'blue',
      titleSize:'15',
      

    },
    {
      titleName:'apple',
      titleColor:'blue',
      titleSize:'15'

    },
    {
      titleName:'samsung',
      titleColor:'blue',
      titleSize:'15'

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
