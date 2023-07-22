import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlServer = "https://musicback.fly.dev";
  constructor() { }

  getUser(user_id: number){
    return fetch(`${this.urlServer}/current_user/${user_id}`).then(
      response => response.json()
    );
  }
}
