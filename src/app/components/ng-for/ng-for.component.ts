import { Component, OnInit } from '@angular/core';
import { fakestoreproduct } from '../models/fakestoreproduct';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit{

  public products : fakestoreproduct[]=[];

  constructor(){}

  ngOnInit(): void {
    fetch('http://fakestoreapi.com/products/')
    .then(response=>response.json())
    .then(data=>{
      this.products=data
    })
   
    

  }

  

}
