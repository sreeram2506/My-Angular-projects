import { Component, OnInit } from '@angular/core';
import { fakestoreproduct } from '../models/fakestoreproduct';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit{

  constructor(){}

  public Categories:string[]=[]
  public Products:fakestoreproduct[]=[];
  public CartItems:fakestoreproduct[]=[];
  public CartItemsCount:number=0;
  public isCartVisible:boolean=false;

  public LoadCategories():void{
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
      data.unshift('ALL')
      this.Categories=data;
    })
  }

  public LoadProduct(url:string):void{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.Products=data;
    })

  }

  public GetCartItemsCount():void{
    this.CartItemsCount=this.CartItems.length;
  }

  ngOnInit(): void {
    this.LoadCategories();
    this.LoadProduct(`https://fakestoreapi.com/products/`);
    this.GetCartItemsCount();
  }

  public CategoryChanged(CategoryName:string):void{
    
    if (CategoryName==='all'){
      this.LoadProduct(`https://fakestoreapi.com/products/`);
    }else{
      this.LoadProduct(`https://fakestoreapi.com/products/category/${CategoryName}`);
    }

  }

  public AddToCart(id:number):void{

    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.CartItems.push(data);
      this.GetCartItemsCount();
      alert(`${data.title} \n Added to cart`)
    })

  }

  public ToggleCart():void{
    this.isCartVisible = (this.isCartVisible==false)?true:false;
  }

}
