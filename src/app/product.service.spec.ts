import{Injectable }from '@angular/core';
import{http, Response }from '@angular/http';
@ Injectable()
export class ProductService{
  private_albumUrl='../assets/album.json';
    constructor(private_http:Http){}
    getAlbum(id: number){
      return this._http.get(this.AlbumUrl)
    }

}
