import { Component, OnInit } from '@angular/core';
import {fakestoreproduct} from '../models/fakestoreproduct'
@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent implements OnInit {

  constructor(){

  }

  public product:fakestoreproduct={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:'',
    rating:{rate:0,count:0}
  }


  public Loadproduct(id:number):void{
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.product = data;
    })
       
        
     
  }

  ngOnInit(): void {

    this.Loadproduct(1);
  }

  public count:number =1;

  public Nextclick():void{
    this.count++;
    this.Loadproduct(this.count)
  }

  public Previousclick():void{
    this.count--;
    this.Loadproduct(this.count)
  }


}
