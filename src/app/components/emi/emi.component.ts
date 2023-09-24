import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EMIComponent {

  public p : number = 10000;
  public r : number = 10.25;
  public n : number = 1;
  public EMI : number = 0;

  public AmountChange(e:any){
    this.p = e.target.value ;
  }

  public YearChange(e:any){
    this.n = e.target.value ;
  }

  public RateChange(e:any){
    this.r = e.target.value ;
  }

  public CalculateClick(){
    
  }
}

