import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

loggedIn: boolean = false;
currentUser;


httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

setToken(token){
  return localStorage.setItem('auth-token', token)
}

getToken(){
  return localStorage.getItem('auth-token')
}

setEmail(email){
  return localStorage.setItem('email', email)
}

getEmail(){
  return localStorage.getItem('email')
}

constructor(private http: HttpClient) {}

  public logIn(email, password){
    this.loggedIn = true;

    return this.http.put<any>(`https://api-core-dev.caronsale.de/api/v1/authentication/${email}`, {
      password: password,
      meta: ''
    } )
  }

  public logout(){
    this.loggedIn = false;
    return localStorage.removeItem('auth-token')
  }
  
  public getAuction(email){    
    return this.http.get<any>(`https://api-core-dev.caronsale.de/api/v2/auction/buyer/recommended/score?count=false
    `,
    {headers:
      {
      'userId': email, 
      'authtoken': JSON.parse(this.getToken())
    }
    })  
  }

  public getAuctionsConfig(){
    return this.http.get(`https://api-core-dev.caronsale.de/api/v1/public/config/auctions`).subscribe(res=>console.log(res, 'Auctions')
    )
  }
}
