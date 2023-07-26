import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlServer = "https://musicback.fly.dev";
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"})};

  constructor(private storage: Storage,
    private http: HttpClient) { }

  async getUser(){
    const user_id = await this.storage.get("user_id");
    return fetch(`${this.urlServer}/current_user/${user_id}`).then(
      response => response.json()
    );
  }

  async updateUser(newInfo: any){
    console.log("newInfo",newInfo);
    const user_id = await this.storage.get("user_id");
    var raw = JSON.stringify({
      "user": newInfo
    });
    return fetch(`${this.urlServer}/update/${user_id}`,{
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: raw
    }).then((response) => {
      response.json();
    })
  }
}
