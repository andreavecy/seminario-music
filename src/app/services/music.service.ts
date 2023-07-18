import { Injectable } from '@angular/core';
import * as listArtists from "./artists.json"

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getArtists(){
    return fetch("https://musicback.fly.dev/artists").then(
      response => response.json()
    );
  }

  getArtistsFromJson(){
    return listArtists;
  }

}
