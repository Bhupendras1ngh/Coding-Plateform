import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FiddleService } from 'src/app/services/fiddle.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(public fiddleService :FiddleService ,public userService :UserService ,private router : Router){}
   ngOnInit(){
    this.fiddleService.getFiddles().subscribe((res: any)=>{
      this.fiddles .push(res.response);
      console.log("^^^");
      console.log(this.fiddles)
    })
   }
  fiddles:Array<any> =[];

   create(){
    this.fiddleService.newFiddle().subscribe(
      (res:any)=>{
        console.log("***");
        console.log(res);
      }
    )
   }
}
