import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }

  public createAccount(userObj:any){
    return new Promise((resolve ,reject)=>{
      this.http.post('http://localhost:3000/users' ,userObj).subscribe(
      {
        next : (value:any)=>{
           resolve(value)},
        error : console.error
      }

        // (res)=>{
        //    resolve(res);
        // },
        //  (err)=>{
        //   reject(err);
        //  }
      )
    })
  }
}

//subscribe(next?: ((value: Object) => void) | null | undefined, error?: ((error: any) => void) | null | undefined, complete?:
// (next?: ((value: Object) => void)
//  | null | undefined, error?: ((error: any) => void) | null | undefined, complete?: (() => void) | null | undefined): Subscription' is deprecated
