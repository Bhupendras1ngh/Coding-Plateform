import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FiddleService {

  constructor(private http:HttpClient, private userService:UserService) { }

  public newFiddle(){
    // return new Promise((resolve, reject)=>{
      console.log(this.userService.user.userid)
    return  this.http.post('http://localhost:5500/fiddle', {userid: this.userService.user.userid});
      // .subscribe(
      //   res=>{
      //     resolve(res);
      //   },
      //   err =>{
      //     reject(err);
      //   }
      // )
    // });
  }

  public getFiddles(){
  //   return new Promise((resolve, reject)=>{
    return  this.http.get('http://localhost:5500/fiddle/user/' + this.userService.user.userid);
    //   .subscribe(
    //     res=>{
    //       resolve(res);
    //     },
    //     err =>{
    //       reject(err);
    //     }
    //   );
    // });
  }

  getFiddleData(fiddleid:any){
    //return new Promise((resolve, reject)=>{
     return this.http.get('http://localhost:5500/fiddle/' + fiddleid).subscribe(
        res=>{
          console.log(res);
        }
        // err =>{
        //   reject(err);
        // }
      );
    //});
  }

  run(opts:any){
    // return new Promise((resolve, reject)=>{
     return this.http.post('http://localhost:5500/execute', opts).subscribe(
        res=>{
         console.log(res);
        }
        
      );
    // });
  }

  save(fiddleObj:any){
   // return new Promise((resolve, reject)=>{
     return this.http.put('http://localhost:5500/fiddle', fiddleObj).subscribe(
        res=>{
         console.log(res ,"file has been saved");
         },
        // err =>{
        //   reject(err);
        // }
      );
   // });
  }

  delete(fiddleid:any){
    //return new Promise((resolve, reject)=>{
     return this.http.delete('http://localhost:5500/fiddle/' + fiddleid).subscribe(
        res=>{
         console.log("task deleted")
        }
      );
    //});
  }
}
