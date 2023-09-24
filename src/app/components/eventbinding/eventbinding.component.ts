import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  public users:any[] = [{Username:'sreeram'},{Username:'sreedhar'},{Username:'sree'},{Username:'sreevasthav'}];
  public Usererror:string='';
  public isinvalid:boolean = false;
  public ispasswdwarnvisible :boolean =false;
  public Pwderror : string = '';
  public Verifyuser(e:any){
    for(var user of this.users){
      if(user.Username==e.target.value){
        this.Usererror = 'User Name Taken -Try Another';
        this.isinvalid = true;
        break;
      }else{
        this.Usererror = 'User Name Available';
        this.isinvalid = false;
      }
    }
  }  
  public verifypassword(e:any){
    if(e.keyCode>=65 && e.keyCode<=90){
      this.ispasswdwarnvisible=true;
    }else{
      this.ispasswdwarnvisible = false;
    }


  }

  public VerifyRequired(e:any){
    if(e.target.value==""){
      this.Usererror = "User Name Required"
      this.isinvalid = true ;
    }else{
      this.Usererror = "";
    }
  }
  public Passwordfocus(){
    this.Pwderror = 'Caps Not Allowed'
  }

  public Passwordblur(){
    this.Pwderror = ''
  }
}

