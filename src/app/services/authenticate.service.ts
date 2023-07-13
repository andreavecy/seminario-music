import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials:any){
    return new Promise((accept, reject) => {
      if (
        credentials.email == "andrea@pca.com" && 
        credentials.password == "123456789"
      )
      {
        accept("Login exitoso")
      } else {
        reject("Verifique sus credenciales")
      }
    })
  }
}
