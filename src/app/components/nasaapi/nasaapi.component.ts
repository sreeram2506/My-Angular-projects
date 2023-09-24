import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasaapi',
  templateUrl: './nasaapi.component.html',
  styleUrls: ['./nasaapi.component.css']
})
export class NasaapiComponent implements OnInit {

  public MarsObject:any = {};

  constructor(){}

  ngOnInit(): void {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then(response=>response.json())
    .then(data=>{
      this.MarsObject=data;
    })
  }

}
