import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }
  public user:any;

  public createAccount(userObj:any){
   // console.log(userObj);
    // console.log(this.http.post('http://localhost:3000/users' ,userObj).subscribe(
    //   {
    //     next : (res :any)=>{return res},
    //     error : console.error
    //   }
        
    // ))
    // return this.http.post('http://localhost:3000/users' ,userObj).subscribe(
    //  {
    //   next: (val :any)=>{return val},
    //   error: console.error
    //  }
    // )
    // return new Promise((resolve ,reject)=>{
    return  this.http.post('http://localhost:3000/users' ,userObj);
    // .subscribe(
      // {
      //   next : (value:any)=>{
      //      resolve(value)},
      //   error : console.error
      // }
   
      //  (res)=>{
      //      resolve(res);
      //    },
        
      //    (err)=>{
      //     reject(err);
      //    }
        
      // )
    // })
  }


  public login(userObj:any){
    return new Promise((resolve, reject)=>{
      this.http.post('http://localhost:3000/users/login', userObj).subscribe(
        // (res)=>{
        //   resolve(res);
        // },
        // (err)=>{
        //   reject(err);
        // }
      );
    });
  }
 
}

