import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {

  public bgstyle:string='red';
  public textstyle:string='white';
  public padding:number=1;

  public styleobject:{'background-color':string,'color':string , 'padding':string} = {
  "background-color":`red`,
  "color":"white",
  "padding":"10px"
  };

  public Applyclick(){
    this.styleobject={
      "background-color":this.bgstyle,
      "color":this.textstyle,
      "padding":this.padding + "px"
    }
  }

}
