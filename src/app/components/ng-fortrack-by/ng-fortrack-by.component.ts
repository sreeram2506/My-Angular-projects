import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-fortrack-by',
  templateUrl: './ng-fortrack-by.component.html',
  styleUrls: ['./ng-fortrack-by.component.css']
})
export class NgFortrackByComponent implements OnInit {

  public products:any[]=[
    {Name:"TV",Price:45000.44},
    {Name:"Mobile",Price:13400.44},
    {Name:"Shoe",Price:1200}
  ]

  constructor(){}

  ngOnInit(): void {
    
  }

  public UpdateClick(){
    this.products = [
      {Name:"TV",Price:45000},
      {Name:"Mobile",Price:13400.44},
      {Name:"Shoe",Price:1200},
      {Name:'Watch',Price:1000}
      
    ]
  }

  public TrackChanges(index:number){
    return index
  }

}
