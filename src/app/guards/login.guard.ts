import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: Storage,
    private navCtrl: NavController
    ){}
  async canActivate() {
    const isUserLoggedIn = await this.storage.get("isUserLoggedIn");
    console.log("isUserLoggedIn",isUserLoggedIn);
    if (isUserLoggedIn) {
      return true;
    }else{
      console.log("no dejo pasar");
      this.navCtrl.navigateForward("/login");
      return false;
    }
  }
  
}
