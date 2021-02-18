import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-laptop',
  templateUrl: './list-laptop.component.html',
  styleUrls: ['./list-laptop.component.scss']
})
export class ListLaptopComponent implements OnInit {
  laptopColumns:any[]=[
    {
      name:'laptopName',
      color:'color',
      size:'size',
      class:'red',
      red:'red',
      blue:'blue',
      green:'green'
    }
  ];
  
  laptopRows:any[]=[
    {
      titleName:'lenovo',
      titleColor:'blue',
      titleSize:'15'

    },
    {
      titleName:'lenovo',
      titleColor:'blue',
      titleSize:'15'

    },
    {
      titleName:'lenovo',
      titleColor:'blue',
      titleSize:'15'

    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
