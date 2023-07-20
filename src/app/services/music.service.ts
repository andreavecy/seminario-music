import { Injectable } from '@angular/core';
import * as listArtists from "./artists.json"

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  urlServer = "https://musicback.fly.dev";
  constructor() { }

  getArtists(){
    return fetch(`${this.urlServer}/artists`).then(
      response => response.json()
    );
  }

  getArtistsFromJson(){
    return listArtists;
  }

  getArtistsTracks(artist_id: number){
    return fetch(`${this.urlServer}/tracks/artist/${artist_id}`).then(
      response => response.json()
    );
  }

  getAlbumsTracks(album_id: number){
    return fetch(`${this.urlServer}/tracks/album/${album_id}`).then(
      response => response.json()
    )
  }

  getAlbums(){
    return fetch(`${this.urlServer}/albums`).then(
      response => response.json()
    )
  }

}
