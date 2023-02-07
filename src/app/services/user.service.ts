import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }
  ngOnInit(){
   
  }
  public user:any;

  public createAccount(userObj:any){
    return  this.http.post('http://localhost:5500/users' ,userObj);
  }


  public login(userObj:any){
      return this.http.post('http://localhost:5500/users/login', userObj);
     
  }
 
}

