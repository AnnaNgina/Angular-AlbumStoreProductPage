import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService{
private _albumUrl ='../assets/album.json';
  constructor (Private_http: Http ) { }
    getAlbum(id: number){
      return this._http.get(this._albumUrl).map((response))=>response.json());
    }

}
